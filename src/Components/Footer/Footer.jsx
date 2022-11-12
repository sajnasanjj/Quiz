import React from "react";
import {useNavigate} from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();

const handleClick = () => {
    navigate("/")
}
  return (
    <div>
        <button onClick={()=> handleClick()}>Start Over</button>
        
    </div>
  )
};

export default Footer;
