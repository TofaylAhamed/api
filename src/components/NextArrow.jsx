import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { onClick } = props;
  return (
     <div
      className={"text-gray-400 text-5xl absolute top-1/3 right-10 translate-1/2"}
      
      onClick={onClick}
    ><FaRegArrowAltCircleRight/></div>
  )
}

export default NextArrow