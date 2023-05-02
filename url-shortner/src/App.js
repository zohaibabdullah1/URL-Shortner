import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import History from "./History";
import HomeForm from "./Home";

function App() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="text-center">
          <Button className="NavBtn" variant="success" onClick={handleClick}>{show ? "History" : "Home"}</Button>
      {show ? <HomeForm/> : <History/>}
    </div>
  );
}

export default App;
