import { Avatar, Button, Container, Heading, Input,  Text, VStack } from '@chakra-ui/react'; 
import {Link} from "react-router-dom";
const SingIn=()=>{
    return(
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'} 
            w={["full","96"]}
            m={'auto'}
            my={'16'}
          > 
          <Heading textAlign={"center"}>Video HuB</Heading>   
          <Avatar boxSize={"32"} alignSelf={"center"}/>
          <Input placeholder={'Name'} required type={"text"} focusBorderColor={"purple.500"}/>
          <Input placeholder={'Email'} required type={"email"} focusBorderColor={"purple.500"}/>
          <Input placeholder={'Password'} required type={"password"} focusBorderColor={"purple.500"}/> 
          <Button colorScheme='purple' type={"submit"} >Sign-in</Button> 
          <Text textAlign={"right"}>Already a User? {" "}
          <Button variant={"link"} colorScheme='purple'>
             <Link to={"/log-in"}>LogIN  </Link>
          </Button>    
          </Text>
  
          </VStack>
        </form>
      </Container>
    )
} 
export default SingIn;