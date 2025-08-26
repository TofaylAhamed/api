import React from 'react'
import Badge from './Badge'
import Images from './Images'
import { Link } from 'react-router-dom'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import Heading from './Heading'

const Product = ({ ProductImg, ProductBadge, title, price }) => {
  return (
    <>
    <div className="relative group mx-3">
    <Images imgSrc={ProductImg}/>
    <Badge badgeText={ProductBadge} className={"absolute top-6 left-6"}/>
    <div className="bg-gray-400 py-[25px] px-[30px] absolute bottom-7 left-0 w-full opacity-0 group-hover:opacity-100 duration-600">
      <Link To={"/"}className="flex gap-x-2 items-center justify-end">Add to Wish List <FaHeart /></Link>
      <Link To={"/"}className="flex gap-x-2 items-center justify-end">compare <TbRefresh/></Link>
      <Link To={"/"}className="flex gap-x-2 items-center justify-end">Add to Card <FaShoppingCart/></Link>
    </div>
    <div className="my-2 flex justify-between">
      <Heading text={title} as={"h3"}/>
      <Heading text={price} as={"h3"}/>
    </div>
    </div>
    </>
  )
}

export default Product