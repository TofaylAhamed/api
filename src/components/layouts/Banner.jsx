import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <Link to={"/shope"}>
    <div className="bg-[url(/src/assets/Group.png)] h-[500px] bg-no-repeat bg-center bg-cover"></div>
    </Link>
  )
}

export default Banner