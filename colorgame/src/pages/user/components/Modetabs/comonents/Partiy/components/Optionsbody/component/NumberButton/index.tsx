import { Flex, ButtonGroup, Button } from "@chakra-ui/react";
import Timer from "../../../../hook/countDownHook";

export const NumberButton = () => {
    let selectNumber = false;
    const { minutes , seconds } = Timer()
    if(minutes === 0 && seconds <= 30){
     selectNumber = true;
    }else{
      selectNumber = false;
    }
  return (
    <Flex  justifyContent="center" textAlign="center" my="1">
      <ButtonGroup variant="outline" w="full" flexDir="column" size="md" isDisabled={selectNumber}>
        <Flex alignContent="center" justifyContent="space-around"my='1'>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            01
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            02
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            03
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            04
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            05
          </Button>
        </Flex>
        <Flex mx='0' alignContent="start" justifyContent="space-around" my="1">
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            06
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            07
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            08
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            09
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            10
          </Button>
        </Flex>
      </ButtonGroup>
    </Flex>
  );
};
