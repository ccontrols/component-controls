/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx, Text, Flex, Styled } from 'theme-ui';
import { FC } from 'react';
import { PropType } from '@component-controls/specification';
import { Table, TableProps } from '@component-controls/components';
import { useControlsContext, ComponentInputProps } from '../../BlocksContext';

export type PropsTableProps = ComponentInputProps &
  Omit<TableProps, 'columns' | 'data'>;

export const PropsTable: FC<PropsTableProps> = ({
  of,
  sorting = true,
  ...rest
}) => {
  const { component } = useControlsContext({
    of,
  });
  const { info } = component || {};
  return info ? (
    <Table
      {...rest}
      sorting={sorting}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',
          Cell: ({
            row: {
              original: {
                name,
                prop: {
                  type: { required },
                },
              },
            },
          }: {
            row: { original: { name: string; prop: PropType } };
          }) => (
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
          ),
        },
        {
          Header: 'Description',
          accessor: 'prop.description',
          Cell: ({
            row: {
              original: {
                prop: {
                  description,
                  type: { raw },
                },
              },
            },
          }: {
            row: { original: { name: string; prop: PropType } };
          }) => (
            <Flex
              sx={{
                flexDirection: 'column',
              }}
            >
              {description && (
                <Text
                  sx={{
                    textOverflow: 'ellipsis',
                  }}
                >
                  {description}
                </Text>
              )}
              {raw && (
                <Styled.pre
                  sx={{
                    color: 'fadedText',
                    mt: 2,
                    letterSpacing: '0.10em',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {raw}
                </Styled.pre>
              )}
            </Flex>
          ),
        },
        {
          Header: 'Default',
          accessor: 'prop.defaultValue',
          width: '20%',
          Cell: ({
            row: {
              original: {
                prop: { defaultValue },
              },
            },
          }: {
            row: { original: { name: string; prop: PropType } };
          }) => {
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
      data={Object.keys(info.props).map(key => {
        const prop = info.props[key];
        return {
          name: key,
          prop: prop,
        };
      })}
    />
  ) : null;
};
