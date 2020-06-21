/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx, Text, Flex, Styled, Box } from 'theme-ui';
import { FC, useContext, useMemo, MouseEvent, useState } from 'react';
import { window } from 'global';
import jsStringEscape from 'js-string-escape';
import copy from 'copy-to-clipboard';
import {
  Story,
  StoryComponent,
  ComponentControl,
  PropType,
  ComponentInfo,
  visibleControls,
} from '@component-controls/core';

import {
  Table,
  TableProps,
  Markdown,
  ActionContainer,
  Tag,
  ActionItems,
} from '@component-controls/components';
import {
  getPropertyEditor,
  PropertyEditor,
  ConrolsContextProvider,
} from '@component-controls/editors';
import { Column } from 'react-table';
import { BlockControlsContext } from '../context';
import { ComponentVisibility } from '../BlockContainer/components/ComponentsBlockContainer';
import { InvalidType } from '../notifications';
import { useControlsActions } from './controlsActions';

interface PropRow {
  name: string;
  prop: PropType;
  control: ComponentControl;
}

export interface BasePropsTableProps {
  story?: Story;
  component?: StoryComponent;
  extraColumns: Column[];
  tableProps: any;
  visibility?: ComponentVisibility;
}

type GroupingProps = Partial<
  Pick<TableProps, 'groupBy' | 'hiddenColumns' | 'expanded'>
>;
export const BasePropsTable: FC<BasePropsTableProps> = ({
  story = {},
  component = {},
  extraColumns,
  tableProps,
  visibility,
}) => {
  const { setControlValue, clickControl } = useContext(BlockControlsContext);
  const [copied, setCopied] = useState(false);
  const info: Partial<ComponentInfo> = component.info || {};
  const storyControls = visibility !== 'info' ? story.controls || {} : {};
  const controls = visibleControls(storyControls);
  const infoKeys = info && info.props ? Object.keys(info.props) : [];
  // check if we should display controls in the PrpsTable
  // at least one control's name should exist as a property name
  const hasControls = !!Object.keys(controls).length;
  const propControls = { ...controls };
  const { columns, rows, groupProps } = useMemo(() => {
    const parents = new Set();
    const rows: (PropRow | null)[] = infoKeys
      .map(key => {
        //@ts-ignore
        const prop = info.props[key];
        const control = propControls[key];
        const parentName = prop.parentName || control?.groupId || '-';
        const { description, label, required } = control || {};
        if (control) {
          delete propControls[key];
        } else if (visibility === 'controls') {
          return null;
        }
        parents.add(parentName);
        return {
          name: key,
          prop: {
            ...prop,
            type: {
              label,
              required,
              ...prop.type,
            },
            description: description ?? prop.description,
            parentName,
          },
          control,
        };
      })
      .filter(p => p);
    if (propControls) {
      const controlsRows: PropRow[] = [];
      Object.keys(propControls).forEach(key => {
        const control = propControls[key];
        if (!control.hidden) {
          const parentName = control.groupId || '-';
          parents.add(parentName);
          controlsRows.push({
            name: key,
            prop: {
              description: control.description,
              parentName,
              defaultValue: control.defaultValue,
              type: {
                name: control.type,
                required: control.required,
              },
            },
            control,
          });
        }
      });
      rows.unshift.apply(rows, controlsRows);
    }
    const groupProps: GroupingProps = {};
    if (parents.size > 1) {
      groupProps.expanded = {
        [`prop.parentName:${parents.values().next().value}`]: true,
      };
      groupProps.groupBy = ['prop.parentName'];
    } else {
      groupProps.hiddenColumns = ['prop.parentName'];
    }
    const columns = [
      {
        Header: 'Parent',
        accessor: 'prop.parentName',
      },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ row: { original } }: any) => {
          if (!original) {
            return null;
          }
          const {
            name,
            prop: {
              type: { required },
            },
            control,
          } = original;
          const text = (
            <Text
              sx={{
                fontWeight: 'bold',
                textOverflow: 'ellipsis',
              }}
            >
              {control ? control.label || name : name}
            </Text>
          );
          return required ? (
            <Tag color="red" transparentAmount={0.95} borderSize={1}>
              {text}
            </Tag>
          ) : (
            text
          );
        },
      },
      {
        Header: 'Description',
        accessor: 'prop.description',
        width: '60%',
        Cell: ({ row: { original } }: any) => {
          if (!original) {
            return null;
          }
          const {
            name,
            prop: {
              description,
              type: { raw, name: typeName, value },
            },
          } = original;
          return (
            <Flex
              sx={{
                flexDirection: 'column',
              }}
            >
              {description && <Markdown>{description}</Markdown>}
              {(raw ?? typeName) && (
                <Styled.pre
                  sx={{
                    color: 'fadedText',
                    letterSpacing: '0.10em',
                    whiteSpace: 'pre-wrap',
                    margin: 0,
                  }}
                >
                  {Array.isArray(value) && value.length > 1
                    ? value.map(({ name: typeName, value }) => (
                        <Tag
                          key={`${name}_${value || typeName}`}
                          color="grey"
                          transparentAmount={0.9}
                          borderSize={1}
                          variant="tag.rightmargin"
                        >
                          {value || typeName}
                        </Tag>
                      ))
                    : raw ?? typeName}
                </Styled.pre>
              )}
            </Flex>
          );
        },
      },
      {
        Header: 'Default',
        accessor: 'prop.defaultValue',
        width: '40%',
        Cell: ({ row: { original } }: any) => {
          if (!original) {
            return null;
          }
          const {
            prop: { defaultValue },
          } = original;
          let value = null;
          switch (typeof defaultValue) {
            case 'object':
              value = JSON.stringify(defaultValue, null, 2);
              break;
            case 'undefined':
              value = '-';
              break;
            default:
              value = defaultValue.toString();
          }
          return (
            <Box variant="propstable.defaultvalue">
              <Styled.pre>{value}</Styled.pre>
            </Box>
          );
        },
      },
      ...extraColumns,
    ];
    if (hasControls) {
      columns.push({
        Header: 'Controls',
        accessor: 'control',
        width: '30%',
        Cell: ({ row: { original } }: any) => {
          const { control } = original;
          if (control && story) {
            const InputType: PropertyEditor =
              getPropertyEditor(control.type) || InvalidType;

            return (
              <Flex
                sx={{
                  flexDirection: 'column',
                  alignItems: 'left',
                  flexBasis: '100%',
                  minWidth: 200,
                }}
              >
                <InputType name={original.name} />
              </Flex>
            );
          }
          return null;
        },
      });
    }
    return { columns, rows, groupProps };
  }, [
    extraColumns,
    hasControls,
    info.props,
    infoKeys,
    propControls,
    story,
    visibility,
  ]);

  const onChange = (propName: string, value: any) => {
    if (setControlValue && story) {
      setControlValue(story.id || '', propName, value);
    }
  };
  const onClick = () => {
    if (clickControl && story) {
      clickControl(story.id || '', name);
    }
  };
  const table = (
    <ConrolsContextProvider
      controls={controls}
      onChange={onChange}
      onClick={onClick}
    >
      <Table
        {...groupProps}
        {...tableProps}
        columns={columns}
        data={rows}
        sx={{
          th: {
            //some space for the action bar
            pt: 4,
          },
        }}
      />
    </ConrolsContextProvider>
  );
  const actions: ActionItems = [];
  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    const quotedValue = (value: string) => `"${jsStringEscape(value)}"`;
    e.preventDefault();
    const csvRows = rows
      //@ts-ignore
      .map((row: PropRow) => {
        const r = [
          quotedValue(row.name),
          quotedValue(row.prop.type.raw ?? row.prop.type.name),
          quotedValue(row.prop.defaultValue ?? ''),
          quotedValue(row.prop.description ?? ''),
        ];
        if (hasControls) {
          const value = row.control?.value;
          if (Array.isArray(value) || typeof value === 'object') {
            r.push(quotedValue(JSON.stringify(value)));
          } else {
            r.push(quotedValue((value as string) ?? ''));
          }
        }
        return r.join(',');
      })
      .join('\n');
    copy(csvRows);
    if (typeof window !== 'undefined') {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }
  };
  actions.push({
    title: copied ? 'copied' : 'copy table',
    onClick: onCopy,
    id: 'copy_table',
    'aria-label': 'copy table as csv',
  });

  actions.push.apply(
    actions,
    useControlsActions({
      controls,
      setControlValue,
      storyId: story?.id,
    }),
  );
  return <ActionContainer actions={actions}>{table}</ActionContainer>;
};
