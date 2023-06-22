import {Routes,Route}from "react-router-dom";  
import Header  from "./component/Header";
import Home from "./component/Home";  
import Footer from "./component/Footer"; 
import Videos from "./component/Videos"; 
import UploadVideos from "./component/UploadVideo"; 
import LogIn  from "./component/LogIn"; 
import SingIn from "./component/SignIn";


const App=() => {
  return ( 
    <>   
      <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/videos" element={<Videos/>}/>
      <Route path="/uploadvideos" element={<UploadVideos/>}/>
      <Route path="/log-in" element={<LogIn/>}/>
      <Route path="/sign-in" element={<SingIn/>}/>
    </Routes> 
    <Footer/>
    </>

  );
}

export default App;
