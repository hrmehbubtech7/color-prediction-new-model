import { Flex, Menu, MenuButton , Text } from "@chakra-ui/react";

export const Topbar = () => {
  return (
    <Flex
      color='black'
      bg= 'linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )'
      py='4'
      px='2'
      justifyContent='space-between'
      alignItems='center'
      position='fixed'
      w='full'
      zIndex='500'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='center'
    >
      <Flex mx='2' alignItems='center'>
        <Menu>
          <MenuButton>
            <Flex>
              <Text>From the topbar</Text>
            </Flex>
          </MenuButton>
        </Menu>
      </Flex>
    </Flex>
  );
};
