import { Box } from "@chakra-ui/react";
import { useMemo } from "react";
import { CustomTable } from "../../../../../../../../components/user/CustomTable";
import { ColorButton } from "./component/ColorButton";
import { NumberButton } from "./component/NumberButton";
import { ParityHistoryTable } from "./hook/ParityHistoryTable";

interface ParityHistoryTableModel {
  period: string;
  number: number;
  result: string;
  price : string;
}

const data: ParityHistoryTableModel[] = [
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },

  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
  {
    period: "A121",
    number: 123,
    result: "red",
    price : "sdsf"
  },
];

export const Optionbody = () => {
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    onSelected,
    toggleButtonSelected,
  } = ParityHistoryTable(data);

  const ParityHistory = useMemo(
    () => CustomTable<ParityHistoryTableModel>(),
    []
  );
  return (
    <>
      <Box justifyContent='center'>
        <ColorButton />
        <NumberButton />
        <Box justifyContent='space-around'  overflow='auto'>
          <ParityHistory
            getTableBodyProps={getTableBodyProps}
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            prepareRow={prepareRow}
            rows={rows}
            isData={!!data.length}
          />
        </Box>
      </Box>
    </>
  );
};
