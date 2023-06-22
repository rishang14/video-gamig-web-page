import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineSend ,AiOutlineInstagram,AiOutlineGithub} from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} color={'white'} p={'16'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={["center", "left"]}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter e-mail here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'}>
            VIDEO HUB
          </Heading> 
          <Text>All rights received</Text>
        </VStack>
        <VStack w={'full'}> 
        <Heading size={"md"} textTransform={"uppercase"}> 
        Social Media
        </Heading> 
        <Button variant={"link"} colorScheme={"white"} size={"lg"} >
            <a href="https://instagram.com/rishang_14" target='blank' style={{marginRight:"10px"}}><AiOutlineInstagram/></a>
            <a href="https://github.com/rishang14" target='blank' ><AiOutlineGithub/></a>
        </Button>
        </VStack>
      </Stack>
    </Box>
  );
};
export default Footer;
