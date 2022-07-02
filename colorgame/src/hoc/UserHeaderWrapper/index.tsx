import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Topbar } from '../../components/user/Topbar';

interface UserHeaderWrapperProps {
    children : React.ReactNode;
}

const UserHeaderWrapper: FC<UserHeaderWrapperProps> = ({ children }) => {
  return (
    <Box minH='100vh'>
      <Topbar />
      <Flex bg='gray.200' h='100vh'>
        <Box bg='white' borderRadius='md' pt='24' w='full' px='4'>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default UserHeaderWrapper;
