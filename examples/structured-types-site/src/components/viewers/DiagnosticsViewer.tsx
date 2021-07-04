/* eslint-disable react/display-name */
import React, { FC, useMemo } from 'react';
import { Box, Text } from 'theme-ui';
import {
  AlertIcon,
  StopIcon,
  Icon,
  InfoIcon,
  IssueOpenedIcon,
} from '@primer/octicons-react';
import { Table, Column, Tag } from '@component-controls/components';
import { PropDiagnostic } from '@component-controls/structured-types/types';
import { useTypesContext } from '../../contexts/TypesContext';
import { LoadingIndicator } from './LoadingIndicator';

const categoryColors: {
  [key in PropDiagnostic['category']]: {
    color: string;
    icon: Icon;
    text: string;
  };
} = {
  '3': {
    color: 'status_disabled',
    icon: InfoIcon,
    text: 'Message',
  },
  '2': {
    color: 'status_todo',
    icon: IssueOpenedIcon,
    text: 'Suggestion',
  },
  '0': {
    color: 'status_skipped',
    icon: AlertIcon,
    text: 'Warning',
  },
  '1': {
    color: 'status_failed',
    icon: StopIcon,
    text: 'Error',
  },
};
export const DiagnosticsViewer: FC = () => {
  const { loading, types } = useTypesContext();
  const columns = useMemo(() => {
    const columns: Column<PropDiagnostic>[] = [
      {
        Header: 'category',
        accessor: 'category',
        width: 80,
        Cell: ({ value }) => {
          const impact = value ? categoryColors[value] : undefined;
          return (
            impact && (
              <Tag color={impact.color}>
                <impact.icon />
                <Text
                  sx={{
                    pl: impact ? 2 : 0,
                  }}
                >
                  {impact.text}
                </Text>
              </Tag>
            )
          );
        },
      },
      {
        Header: 'message',
        minWidth: 200,
        accessor: 'message',
      },
      {
        Header: 'location',
        accessor: 'fileName',
        Cell: ({
          value,
          row: {
            original: { column, row },
          },
        }) => (
          <Text>{`${value || ''} ${
            row ? ` (${`${row}, ${column}`})` : ''
          }`}</Text>
        ),
      },
    ];
    return columns;
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        overflowY: 'auto',
        ml: 3,
      }}
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <Table<PropDiagnostic>
          data={types.__diagnostics || []}
          columns={columns}
        />
      )}
    </Box>
  );
};
