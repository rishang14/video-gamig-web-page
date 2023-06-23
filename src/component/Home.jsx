import {Box, Container, Heading, Image, Stack, Text} from "@chakra-ui/react" ; 
import {Carousel} from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";  
 

const headingStyles={
    position:"absolute", 
    top:"50%", 
    left:"50%", 
    textTransform:"uppercase", 
    transform:"translate(-50%,-50%)",
    size:"xl"  
    

}

const MyCarousel=()=>{
    return(
   <Carousel infiniteLoop autoPlay interval={1000} showStatus={false} showArrows={false} showThumbs={false} >
    <Box w={'full'} h={"70vh"}  >
    <Image  src={img1}  objectFit={"fit"}  h={"100%"} zIndex={"-3"}/> 
    <Heading  bgColor={"blackAlpha.600"} color={"white"} {...headingStyles}>Watch the future</Heading>
   </Box> 
     
   <Box w={'full'} h={"70vh"} >
    <Image  src={img2}  objectFit={"fit"}  h={"100%"}/> 
    <Heading  bgColor={"whiteAlpha.900"} color={"black"} {...headingStyles}>Future is Gaming</Heading>
    </Box>
   <Box w={'full'} h={"70vh"} >
    <Image  src={img3}  objectFit={"fit"}  h={"100%"} /> 
    <Heading  bgColor={"whiteAlpha.900"} color={"black"} {...headingStyles}>Gaming on console</Heading>
    </Box>
   <Box w={'full'} h={"70vh"} >
    <Image  src={img4} objectFit={"fit"}  h={"100%"}/> 
    <Heading  bgColor={"whiteAlpha.900"} color={"black"} {...headingStyles}> Gamers Night life is cool</Heading>
    </Box>
   </Carousel>

    )
}

const Home=()=>{ 
    return(
      <Box >
        <MyCarousel height={"50vh"}/> 
        <Container maxW={"container.xl"} minH={"100vh"} p="16">
       <Heading textTransform={"uppercase"} margin={"auto"} w={"fit-content"} py={"2"} borderBottom={"2px solid black"}>
        services
       </Heading> 
       <Stack 
       alignItems={"center"} 
       h={"full"}
       p={"4"} 
       direction={["column","row"]}>
        <Image
         h={["40","350"]} 
         filter={"hue-rotate(-130deg)"}
         src={img5}/> 
         <Text letterSpacing={"widest"} p={["4","16"]} textAlign={"center"} lineHeight={"190%"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem magnam a maxime amet dolorum hic, quis eum explicabo sequi iusto, labore provident porro incidunt repudiandae consectetur quod deserunt beatae autem qui minima error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, earum! Quasi officiis quo dignissimos maiores cupiditate quia dicta doloremque assumenda tempore consectetur incidunt molestiae ea pariatur, id cum error non officia mollitia earum fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione debitis commodi rerum. Earum, reprehenderit inventore modi sapiente vero minima facere atque? Recusandae, non aperiam cupiditate odio neque dolore maxime atque quo doloremque necessitatibus voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolorem.
         </Text>

       </Stack>
        </Container>
      </Box>
    )

} 
export default Home;