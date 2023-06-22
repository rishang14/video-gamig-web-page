import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, 
    Button, 
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react';  
  import {Link} from "react-router-dom"; 
  import {BiMenuAltLeft} from "react-icons/bi"
const Header=()=>{  
    const {isOpen,onOpen,onClose}=useDisclosure()
    return(
      <> 
      <Button 
      position={"fixed"} 
      top={"4"} 
      left={"4"}
      colorScheme='purple' 
      borderRadius={"full"} 
      p={"0"} 
      w={"10"}
      h={"10"}  
      zIndex={"overlay"}
      onClick={onOpen}
      ><BiMenuAltLeft size={"20"}/></Button>  
      <Drawer 
      isOpen={isOpen} 
      placement='left'
      onClose={onClose} 
      >   
      <DrawerOverlay/> 
      <DrawerContent> 
        <DrawerCloseButton/>
       <DrawerHeader>
        Gaming Video Hub
       </DrawerHeader> 
       <DrawerBody> 
        <VStack  alignItems={"flex-start"}>
            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                <Link to={"/"}>Home</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                <Link to={"/video"}>Videos</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                <Link to={"/videos?category=free"}>Free Videos</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                <Link to={"/upload"}>Upload Video</Link>
            </Button>
        </VStack> 
        <HStack position={"absolute"} 
             bottom={"5"}  
             left={"0"}
             w={"full"} 
             justifyContent={"center"}
             >
        <Button onClick={onClose} colorScheme='purple'>
                <Link to={"/login"}>Log in</Link>
            </Button>
        <Button onClick={onClose} colorScheme='purple' variant={"outline"}>
                <Link to={"/signUp"}>Sign Up</Link>
            </Button>
        </HStack>
         
       </DrawerBody>

      </DrawerContent>
      </Drawer>

      
      </>
    )

} 
export default Header; 
