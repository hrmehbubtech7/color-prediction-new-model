import {
  Button,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import Timer from "../../../../hook/countDownHook";

export const ColorButton = () => {
 let selecteColor = false;
const { minutes , seconds } = Timer()
if(minutes === 0 && seconds <= 30){
 selecteColor = true;
}else{
  selecteColor = false;
}

  return (
    <>
      <Flex justifyContent="space-between" my="4">
        <ButtonGroup  justifyContent="space-around" w="full" isDisabled={selecteColor} >
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="red"
          >
            Red
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
          >
            Voilet
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="green"
          >
            Green
          </Button>
        </ButtonGroup>
      </Flex>
      
    </>
  );
};
