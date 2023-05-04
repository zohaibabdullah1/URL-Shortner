import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import History from "./History";
// import HomeForm from "./Home";
import NavBar from "./NavBar"
import FormData from "./Home";


function App() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="Main-Div">
      <> {/* < Video/> */}
      
          <NavBar/>
          <h2 className="display-6 mt-5">Enter URL</h2>
          <FormData/>
          {/* <Button className="NavBtn" variant="success" onClick={handleClick}>{show ? "History" : "Home"}</Button>
      {show ? <FormData/> : <History/>} */}
      </>
    </div>

         

  );


  


  // function Video(){

    
  //   return(
  //     <div>
  //       <div class="hero-media" id="hero-media">
  //     <video id="background-video" class="hero-media-asset is-visible" autoplay="" muted="muted" loop="" playsinline="" data-hero-video="" data-src-lg="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906" data-src-sm="https://cdn.dribbble.com/uploads/39418/original/0cc960a3bf612d0badc4f6165eb36f7b.mp4?1657824915">
  //       <source src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906" type="video/mp4"/>      </video>
  // </div>
  //     </div>
  //   )
  // }
}

export default App;
