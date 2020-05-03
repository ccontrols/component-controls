/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx, Text, Flex, Styled, Box } from 'theme-ui';
import { FC, useMemo, useContext } from 'react';
import { ComponentControl, PropType } from '@component-controls/specification';
import { getPropertyEditor, PropertyEditor } from '@component-controls/editors';
import {
  Table,
  TableProps,
  Markdown,
  ActionContainer,
  Tag,
} from '@component-controls/components';
import { Column } from 'react-table';
import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { BlockControlsContext } from '../context';
import { InvalidType } from '../notifications';
import { useControlsActions } from '../ControlsTable/controlsActions';
export interface PropsTableOwnProps {
  /**
   * extra custom columns passed to the PropsTable.
   */
  extraColumns?: Column[];
}
export type PropsTableProps = PropsTableOwnProps &
  Omit<ComponentsBlockContainerProps, 'children'> &
  Omit<TableProps, 'columns' | 'data'>;

type GroupingProps = Partial<
  Pick<TableProps, 'groupBy' | 'hiddenColumns' | 'expanded'>
>;

interface PropRow {
  name: string;
  prop: PropType;
  control: ComponentControl;
}
export const PropsTable: FC<PropsTableProps> = ({
  extraColumns = [],
  ...props
}) => {
  const { setControlValue, clickControl } = useContext(BlockControlsContext);

  return (
    <ComponentsBlockContainer visibleOnControlsOnly={true} {...props}>
      {(component, { story }, rest) => {
        const { info = { props: undefined } } = component || {};
        const { controls = {} } = story || {};
        const propControls = { ...controls };
        const { rows, hasControls, groupProps } = useMemo(() => {
          // check if we should display controls in the PrpsTable
          // at least one control's name should exist as a property name
          const hasControls = !!Object.keys(propControls).length;
          const keys = info.props ? Object.keys(info.props) : [];
          const parents = new Set();
          let rows: PropRow[] = keys.map(key => {
            //@ts-ignore
            const prop = info.props[key];
            const control = propControls[key];
            const parentName = prop.parentName || control?.groupId || '-';
            const { description, label } = control || {};
            if (control) {
              delete propControls[key];
            }
            parents.add(parentName);
            return {
              name: key,
              prop: { ...prop, description, label, parentName },
              control,
            };
          });
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
                    },
                  },
                  control,
                });
              }
            });
            rows = [...controlsRows, ...rows];
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

          return { hasControls, rows, groupProps };
        }, [story?.id, controls]);

        const columns = useMemo(() => {
          const cachedColumns = [
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
                } = original;
                const text = (
                  <Text
                    sx={{
                      fontWeight: 'bold',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {name}
                  </Text>
                );
                return required ? (
                  <Tag
                    color="red"
                    transparentAmount={0.95}
                    sxStyle={{ borderRadius: 4 }}
                  >
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
                                sxStyle={{
                                  mr: 1,
                                }}
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
                  <Styled.pre
                    sx={{
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {value}
                  </Styled.pre>
                );
              },
            },
            ...extraColumns,
            ,
          ];
          if (hasControls) {
            cachedColumns.push({
              Header: 'Controls',
              accessor: 'control',
              width: '30%',
              Cell: ({ row: { original } }: any) => {
                const { control } = original;
                if (control && story) {
                  const InputType: PropertyEditor =
                    getPropertyEditor(control.type) || InvalidType;
                  const onChange = (propName: string, value: any) => {
                    if (setControlValue && story.id) {
                      setControlValue(story.id, propName, value);
                    }
                  };
                  const onClick = () => {
                    if (clickControl && story.id) {
                      clickControl(story.id, name);
                    }
                  };
                  return (
                    <Flex
                      sx={{
                        flexDirection: 'column',
                        alignItems: 'left',
                        flexBasis: '100%',
                        minWidth: 200,
                      }}
                    >
                      <InputType
                        prop={control}
                        name={original.name}
                        onChange={onChange}
                        onClick={onClick}
                      />
                    </Flex>
                  );
                }
                return null;
              },
            });
          }
          return cachedColumns;
        }, [story?.id, extraColumns, hasControls]);
        const table = (
          <Table {...groupProps} {...rest} columns={columns} data={rows} />
        );
        if (!hasControls) {
          return table;
        }
        const controlsActions = useControlsActions({
          controls,
          setControlValue,
          storyId: story?.id,
        });
        return (
          <ActionContainer actions={controlsActions}>
            <Box
              sx={{
                pt: 4,
              }}
            >
              <Table {...groupProps} {...rest} columns={columns} data={rows} />
            </Box>
          </ActionContainer>
        );
      }}
    </ComponentsBlockContainer>
  );
};
