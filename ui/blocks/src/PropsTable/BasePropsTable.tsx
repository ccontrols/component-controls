/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx, Text, Styled, Box } from 'theme-ui';
import { FC, useMemo, MouseEvent, useState } from 'react';
import { window } from 'global';
import jsStringEscape from 'js-string-escape';
import copy from 'copy-to-clipboard';
import {
  Component,
  ComponentControl,
  PropType,
  ComponentInfo,
  visibleControls,
  PropTypes,
} from '@component-controls/core';
import { useControl } from '@component-controls/store';

import {
  Table,
  TableProps,
  Markdown,
  ActionContainer,
  Tag,
  ActionItems,
} from '@component-controls/components';
import { getPropertyEditor, PropertyEditor } from '@component-controls/editors';
import { Column } from 'react-table';
import { useCurrentStory } from '@component-controls/store';
import { ComponentVisibility } from '../BlockContainer/components/ComponentsBlockContainer';
import { InvalidType } from '../notifications';
import { useControlsActions } from './controlsActions';

interface PropRow {
  name: string;
  prop: PropType;
  control: ComponentControl;
}

export interface BasePropsTableProps {
  component?: Component;
  extraColumns: Column[];
  /**
   * if true, will flatten the group by
   */
  flat?: boolean;
  tableProps: any;
  visibility?: ComponentVisibility;
}

type GroupingProps = Partial<
  Pick<TableProps, 'groupBy' | 'hiddenColumns' | 'expanded'>
>;
export const BasePropsTable: FC<BasePropsTableProps> = ({
  component = {},
  extraColumns,
  tableProps,
  visibility,
  flat,
}) => {
  const [copied, setCopied] = useState(false);
  const story = useCurrentStory();
  const info: Partial<ComponentInfo> = useMemo(() => component.info || {}, [
    component,
  ]);
  const [, setControlValue] = useControl();
  const controls = useMemo(() => {
    const storyControls = visibility !== 'info' ? story?.controls || {} : {};
    return visibleControls(storyControls, story);
  }, [visibility, story]);
  const infoKeys = useMemo(
    () => (info && info.props ? Object.keys(info.props) : []),
    [info],
  );
  // check if we should display controls in the PrpsTable
  // at least one control's name should exist as a property name

  const { hasControls, propControls } = useMemo(
    () => ({
      hasControls: !!Object.keys(controls).length,
      propControls: { ...controls },
    }),
    [controls],
  );
  const { columns, rows, groupProps } = useMemo(
    () => {
      const parents = new Set();
      let rows: (PropRow | null)[] = infoKeys
        .map(key => {
          const prop = (info.props as PropTypes)[key];
          const control = propControls[key];
          const parentName =
            control?.groupId || (prop && prop.parentName) || '-';
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
                ...prop?.type,
              },
              description: description ?? prop?.description,
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
        rows = [...controlsRows, ...rows];
      }
      const groupProps: GroupingProps = {};
      if (parents.size > 1 && !flat) {
        const firstRowWithParent = rows.find(row => row?.prop.parentName);
        if (firstRowWithParent) {
          groupProps.expanded = {
            [`prop.parentName:${firstRowWithParent.prop.parentName}`]: true,
          };
        }
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
          width: 150,
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
              <Text variant="propstable.name">
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
              <Box variant="propstable.description.container">
                {description && <Markdown>{description}</Markdown>}
                {(raw ?? typeName) && (
                  <Box variant="propstable.description.type">
                    <Styled.pre>
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
                  </Box>
                )}
              </Box>
            );
          },
        },
        {
          Header: 'Default',
          accessor: 'prop.defaultValue',
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
          Cell: ({ row: { original } }: any) => {
            const { control } = original;
            if (control) {
              const InputType: PropertyEditor =
                getPropertyEditor(control.type) || InvalidType;

              return (
                <Box variant="propstable.control">
                  <InputType name={original.name} />
                </Box>
              );
            }
            return null;
          },
        });
      }
      return { columns, rows, groupProps };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasControls, info.props, story?.id, visibility],
  );

  const table = (
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
  );
  const actions: ActionItems = [];
  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    const quotedValue = (value: string) => `"${jsStringEscape(value)}"`;
    e.preventDefault();
    const csvRows = rows
      .map(rowOrNull => {
        const row = rowOrNull as PropRow;
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
    node: copied ? 'copied' : 'copy table',
    onClick: onCopy,
    id: 'copy_table',
    'aria-label': 'copy table as csv',
  });

  actions.push(
    ...useControlsActions({
      controls,
      storyId: story?.id,
      setControlValue: (
        storyId: string,
        propertyName: string | undefined,
        value: any,
      ) => {
        setControlValue(value);
      },
    }),
  );
  return <ActionContainer actions={actions}>{table}</ActionContainer>;
};
