import { useToast , UseToastOptions } from "@chakra-ui/react";

export const useToastMessage = () => {
    const toast = useToast();


    const showToast = (
        {
            title, 
            status,
            description,
            position = 'bottom',
            duration = 5000,
        }: UseToastOptions ,
        isCloseAlreadyOpened: boolean = true,
    ) => {
        if(isCloseAlreadyOpened){
            toast.closeAll();
        }
        toast({
            title,
            status,
            description,
            position,
            duration,
            isClosable: false
        })
    };
    return showToast;
};