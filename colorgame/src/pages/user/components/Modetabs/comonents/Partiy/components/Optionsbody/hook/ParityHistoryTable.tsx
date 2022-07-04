import { Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { CellProps, Column, useTable } from "react-table";

interface ParityHistoryTableModel {
  period: string;
  number: number;
  result: string;
  price : string;

}

export const ParityHistoryTable = (data: ParityHistoryTableModel[]) => {
  const [buttonSelected, setButtonSlected] = useState("");

  const toggleButtonSelected = () => {
    setButtonSlected("");
  };

  const onSelected = () => {
    toggleButtonSelected();
  };

  const columns = useMemo<Column<ParityHistoryTableModel>[]>(
    () => [
      {
        Header: "Period",
        accessor: (row) => row.period,
        Cell: (rowDetails: CellProps<ParityHistoryTableModel>) => {
          return <Text>{rowDetails.value}</Text>;
        },
      },
      {
        Header: "Number",
        accessor: (row) => row.number,
        Cell: (rowDetails: CellProps<ParityHistoryTableModel>) => {
          return <Text>{rowDetails.value}</Text>;
        },
      },
      {
        Header: "Color",
        accessor: (row) => row.result,
        Cell: (rowDetails: CellProps<ParityHistoryTableModel>) => {
          return <Text>{rowDetails.value}</Text>;
        },
      },
      {
        Header: "Price",
        accessor: (row) => row.price,
        Cell: (rowDetails: CellProps<ParityHistoryTableModel>) => {
          return <Text>{rowDetails.value}</Text>;
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    onSelected,
    toggleButtonSelected,
  };
};
