import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Grid,
} from "@chakra-ui/react";
import { useTransform } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { useToastMessage } from "../../../../../../../../../../../../hooks/useToastMessage";

interface ButtonSelectedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  buttonColor: string;
}

interface FormData {
  bet: string;
  colorSelected: string;
}

export const ButtonSelectedModal: FC<ButtonSelectedModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  buttonColor,
}) => {
  const showToast = useToastMessage();

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  setValue("colorSelected", buttonColor);

  const [selectedArray , setSelectedArray] = useState<FormData>()

  const formSubmitHandle = (data: FormData) => {
    setSelectedArray(data);
    reset();
    onClose();
  };
  console.log(selectedArray)

  useEffect(() =>{
    console.log(formState.isValid)
  },[
    formState.isValid
  ])
  // console.log(selectedArray);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <Grid as='form' onSubmit={handleSubmit(formSubmitHandle)}>
            <ModalBody>
              <FormControl>
                <FormLabel>Add Money</FormLabel>
                <Input placeholder="add Money" {...register("bet")} />
              </FormControl>

              <FormControl>
                <FormLabel>Add Money</FormLabel>
                <Input placeholder="add Money" {...register("colorSelected")} />
              </FormControl>
            </ModalBody>
            <ModalFooter>

            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="facebook"  mr={3} type="submit">
              Submit
            </Button>
            </ModalFooter>
          </Grid>
        </ModalContent>
      </Modal>
    </>
  );
};
