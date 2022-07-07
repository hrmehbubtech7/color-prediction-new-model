import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import { socketInstance } from "../../../../../../../../config/socketInstance";

export const Counter = () => {
  // const { minutes, seconds } = Timer();

  let period = 1000000000000;
  const { data: timerData, refetch: timerDataRefetch } = useQuery<TimerModule>(
    "time",
    timer,
    {
      refetchOnWindowFocus: true,
      refetchInterval: 1000 * 60 * 5,
      refetchIntervalInBackground: true,
    }
  );
  console.log(timerData);
  if (timerData?.minutes === 0 && timerData?.seconds === 0) {
    period++;
  }

  const handleUpdate = useCallback(() => {
    timerDataRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   timerModalData(handleUpdate);
  //   console.log(timerModalData,"-------")
  // });

  useEffect(()=> {
    socketInstance.on('connected', (message)=> {
      console.log("I got message from server,")
    })
  }, [])

  return (
    <Flex justifyContent="space-between">
      <Flex>Period : {period}</Flex>
      <Flex>
        minutes : {timerData?.minutes}
        seconds : {timerData?.seconds}
      </Flex>
    </Flex>
  );
};

interface TimerModule {
  minutes: number;
  seconds: number;
  winnerNumber: number;
  winnerColor: string;
  parityPeriod: number;
}

export const timer = async (): Promise<TimerModule> => {
  const res = await axios.get("http://localhost:3002/api/parity-period/timer");
  return res.data;
};

export const timerModalData = (callback: (message: string) => void) => {
  socketInstance.on("timerModal", callback);
};
