import {Routes,Route}from "react-router-dom";  
import Header  from "./component/Header";
import Home from "./component/Home";  
import Footer from "./component/Footer"; 
import Videos from "./component/Videos";


const App=() => {
  return ( 
    <>   
      <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/video" element={<Videos/>}/>
    </Routes> 
    <Footer/>
    </>

  );
}

export default App;
