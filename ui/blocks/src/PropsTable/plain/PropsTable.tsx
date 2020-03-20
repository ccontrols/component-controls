/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx, Text, Flex, Styled } from 'theme-ui';
import { FC } from 'react';
import { Table, TableProps, Markdown } from '@component-controls/components';
import { ComponentsContainer } from '../../context/components/ComponentsContainer';
import { ComponentInputProps } from '../../context/components/ComponentsContext';

export type PropsTableProps = ComponentInputProps &
  Omit<TableProps, 'columns' | 'data'>;

type GroupingProps = Partial<
  Pick<TableProps, 'groupBy' | 'hiddenColumns' | 'expanded'>
>;

export const PropsTable: FC<PropsTableProps> = ({
  of,
  sorting = true,
  ...rest
}) => (
  <ComponentsContainer of={of}>
    {component => {
      const { info } = component || {};
      if (!info) {
        return null;
      }
      const parents = new Set();
      const rows = Object.keys(info.props).map(key => {
        const prop = info.props[key];
        const parentName = prop.parentName ?? '-';
        parents.add(parentName);
        return {
          name: key,
          prop: { ...prop, parentName },
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
      /*
       */

      return (
        <Table
          {...groupProps}
          {...rest}
          sorting={sorting}
          columns={[
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
              width: '20%',
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
          ]}
          data={rows}
        />
      );
    }}
  </ComponentsContainer>
);
