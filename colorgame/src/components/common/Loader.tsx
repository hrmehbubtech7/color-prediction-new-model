import { Flex, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Flex
      position='fixed'
      height='100vh'
      width='100vw'
      bg='#0000007a'
      zIndex='1000'
      top='0'
      left='0'
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
    >
      <Spinner
        size='xl'
        thickness='5px'
        speed='0.80s'
        color='blue.500'
        emptyColor='gray.300'
      />
    </Flex>
  );
};

export default Loader;
