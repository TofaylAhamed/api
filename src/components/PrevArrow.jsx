import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


const PrevArrow = (props) => {
    const { onClick } = props;
  return (
    <div
      className={"text-gray-400 text-5xl absolute top-1/3 left- translate-1/2 z-10"}
      
      onClick={onClick}
    ><FaRegArrowAltCircleLeft/></div>
  )
}

export default PrevArrow