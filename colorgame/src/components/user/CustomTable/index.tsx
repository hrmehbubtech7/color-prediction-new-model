import {
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    TableBodyProps,
    TableProps,
    TableCaption,
    Flex,
  } from '@chakra-ui/react';
  import { FC } from 'react';
  import {
    HeaderGroup,
    TableBodyPropGetter,
    TablePropGetter,
    Row,
  } from 'react-table';
  
  interface CustomTableProps<T extends object> {
    headerGroups: HeaderGroup<T>[];
    getTableBodyProps: (
      propGetter?: TableBodyPropGetter<T> | undefined,
    ) => TableBodyProps;
    getTableProps: (propGetter?: TablePropGetter<T> | undefined) => TableProps;
    rows: Row<T>[];
    prepareRow: (row: Row<T>) => void;
    isData: boolean;
  }
  
  export const CustomTable = <T extends object>() => {
    const Instance: FC<CustomTableProps<T>> = ({
      getTableProps,
      headerGroups,
      getTableBodyProps,
      rows,
      prepareRow,
      isData,
    }) => {
      return (
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map(headerGroup => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th {...column.getHeaderProps()}>
                    <Flex alignItems='center'>
                      {column.render('Header')}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          {(isData && (
            <Tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <Td {...cell.getCellProps()} lineHeight='none'>
                          {cell.render('Cell')}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          )) || <TableCaption>No data</TableCaption>}
        </Table>
      );
    };
    return Instance;
  };
  