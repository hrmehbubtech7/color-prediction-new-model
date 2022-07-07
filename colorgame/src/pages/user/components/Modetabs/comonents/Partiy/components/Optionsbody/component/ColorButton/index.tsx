import { Button, ButtonGroup, Flex, useBoolean } from "@chakra-ui/react";
import { useState } from "react";
import Timer from "../../../../hook/countDownHook";
import { ButtonSelectedModal } from "./component/ButtonSelectedModal";

export const ColorButton = () => {
  let selecteColor = false;
  const { minutes, seconds } = Timer();
  if (minutes === 0 && seconds <= 30) {
    selecteColor = true;
  } else {
    selecteColor = false;
  }
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Button is Clicked");
  };

  const [isDialogboxopen , setIsDialogboxopen] = useBoolean(false);

  console.log(isDialogboxopen)

  const [buttonColor , setButtonColor] = useState('')

  const hanndleChange  = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>,colorScheme:string) => { 
    e.preventDefault();
    setIsDialogboxopen.on();
    setButtonColor(colorScheme)
  }






  return (
    <>
      <Flex justifyContent="space-between" my="4">
        <ButtonGroup
          justifyContent="space-around"
          w="full"
          isDisabled={selecteColor}
        >
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="red"
            name = 'red'
            onClick={e => hanndleChange(e,'red')}
          >
            Red
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="blue"
            onClick={e => hanndleChange(e , 'voilet')}
            value = 'voiler'
          >
            Voilet
          </Button>
          <Button
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            colorScheme="green"
            onClick={e => hanndleChange(e , 'green')}
            value = "green"
          >
            Green
          </Button>

          <ButtonSelectedModal isOpen={isDialogboxopen}  onClose = {setIsDialogboxopen.off} buttonColor= {buttonColor}/>
        </ButtonGroup>
      </Flex>
    </>
  );
};
