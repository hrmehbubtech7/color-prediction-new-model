import { Box } from '@chakra-ui/react';
import Timer from '../../hook/countDownHook'

export const Counter = () => {
    
    const { minutes , seconds } = Timer();
    return (
        <>
        <Box>
        minutes : {minutes}
        seconds : {seconds}
        </Box>
        </>
    )
}