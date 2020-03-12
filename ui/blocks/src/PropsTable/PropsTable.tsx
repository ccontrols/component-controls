/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx, Text, Flex, Styled } from 'theme-ui';
import { FC } from 'react';
import { PropType } from '@component-controls/specification';
import {
  Table,
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import { useControlsContext, ComponentInputProps } from '../BlocksContext';

export type PropsTableProps = ComponentInputProps & BlockContainerProps;

export const PropsTable: FC<PropsTableProps> = ({ of, title, actions }) => {
  const { component } = useControlsContext({
    of,
  });
  const { info } = component || {};
  console.log(component);
  return (
    <BlockContainer actions={actions} title={title}>
      {info && (
        <Table
          sorting={true}
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
                  <Text>{description}</Text>
                  <Styled.pre
                    sx={{
                      color: 'fadedText',
                      mt: 2,
                      letterSpacing: '0.10em',
                    }}
                  >
                    {raw}
                  </Styled.pre>
                </Flex>
              ),
            },
            {
              Header: 'Default',
              accessor: 'prop.defaultValue',
              Cell: ({
                row: {
                  original: {
                    prop: { defaultValue },
                  },
                },
              }: {
                row: { original: { name: string; prop: PropType } };
              }) => <Text>{defaultValue || '-'}</Text>,
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
      )}
    </BlockContainer>
  );
};
