import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const UploadVideos = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input required type="file" />
            <Button colorScheme="purple" type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};
export default UploadVideos;
