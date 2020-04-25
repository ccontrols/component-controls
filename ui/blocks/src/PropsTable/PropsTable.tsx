/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx, Text, Flex, Styled } from 'theme-ui';
import { FC, useMemo, useContext } from 'react';
import { getPropertyEditor, PropertyEditor } from '@component-controls/editors';
import { Table, TableProps, Markdown } from '@component-controls/components';
import { Column } from 'react-table';
import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { BlockControlsContext } from '../context';
import { InvalidType } from '../notifications';

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

export const PropsTable: FC<PropsTableProps> = ({
  extraColumns = [],
  ...props
}) => {
  const { setControlValue, clickControl } = useContext(BlockControlsContext);

  return (
    <ComponentsBlockContainer {...props}>
      {(component, { story }, rest) => {
        const { info } = component || {};
        if (!info) {
          return null;
        }
        const { controls } = story || {};
        const keys = Object.keys(info.props);
        if (!keys.length) {
          return null;
        }
        const parents = new Set();
        const rows = keys.map(key => {
          const prop = info.props[key];
          const parentName = prop.parentName ?? '-';
          parents.add(parentName);
          return {
            name: key,
            prop: { ...prop, parentName },
            control: controls ? controls[key] : undefined,
          };
        });
        const groupProps: GroupingProps = {};
        if (parents.size > 1) {
          groupProps.expanded = {
            [`prop.parentName:${parents.values().next().value}`]: true,
          };
          groupProps.groupBy = ['prop.parentName'];
        } else {
          groupProps.hiddenColumns = ['prop.parentName'];
        }

        // check if we should display controls in the PrpsTable
        // at least one control's name should exist as a property name
        const hasControls =
          controls &&
          Object.keys(controls).some(key => {
            return rows.some(({ name }) => name === key);
          });

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

                return (
                  <Text
                    sx={{
                      fontWeight: 'bold',
                      color: required ? 'red' : undefined,
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {name}
                    {required ? '*' : ''}
                  </Text>
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
                  prop: {
                    description,
                    type: { raw, name },
                  },
                } = original;
                return (
                  <Flex
                    sx={{
                      flexDirection: 'column',
                    }}
                  >
                    {description && <Markdown>{description}</Markdown>}
                    {(raw ?? name) && (
                      <Styled.pre
                        sx={{
                          color: 'fadedText',
                          letterSpacing: '0.10em',
                          whiteSpace: 'pre-wrap',
                          margin: 0,
                        }}
                      >
                        {raw ?? name}
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
        }, [extraColumns, hasControls]);
        return (
          <Table {...groupProps} {...rest} columns={columns} data={rows} />
        );
      }}
    </ComponentsBlockContainer>
  );
};
