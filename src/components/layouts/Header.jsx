import React, {useState} from "react";
import Flex from "../Flex";
import Container from "/src/components/Container";
import Images from "/src/components/Images";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import {FaUser,FaCaretDown,FaShoppingCart} from "react-icons/fa";


const Header = () => {
  let [showCategory, setshowCatrgory] = useState(false);
  let [showCategoryi, setshowCatrgoryi] = useState(false);

  return (
    <>
    <div className=" py-8">
       <Container>
        <Flex>
            <div className="">
                <Link to='/'>
                <Images imgSrc={Logo}/>
                </Link>
            </div>
            <div className="m-auto">
                <ul className="flex gap-x-5 font-normal text-[15px] text-[#767676]">
                    <Link to='/'>
                    <li className='hover:font-bold hover:text-[#262626]'>Home</li>
                    </Link>
                    <Link to='Shope'>
                    <li className='hover:font-bold hover:text-[#262626]'>Shope</li>
                    </Link>
                    <Link to='About'>
                    <li className='hover:font-bold hover:text-[#262626]'>About</li>
                    </Link>
                    <Link to='Contacts'>
                    <li className='hover:font-bold hover:text-[#262626]'>Contacts</li>
                    </Link>
                    <Link to='Journal'>
                    <li className='hover:font-bold hover:text-[#262626]'>Journal</li>
                    </Link>
                </ul>
            </div>
        </Flex>
       </Container>
    </div>
    <div className="bg-[#F5F5F3] py-5 relative">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex items-center gap-x-3 text[14px] text-[#262626]0 " onClick={() => setshowCatrgory(!showCategory)}>
            <HiOutlineBars3BottomLeft/>
            <h3>Shope by catagory</h3>
            { showCategory && (
            <ul className="absolute left-35 top-15 bg-gray-300 p-3 rounded-2xl">
              <Link to='/'>
                <li className='hover:font-bold hover:text-[#262626]'>Beauty</li>
              </Link>
              <Link to='Shope'>
                <li className='hover:font-bold hover:text-[#262626]'>Fragranes</li>
              </Link>
              <Link to='About'>
                <li className='hover:font-bold hover:text-[#262626]'>Furniture</li>
              </Link>
              <Link to='Contacts'>
                 <li className='hover:font-bold hover:text-[#262626]'>Groceries</li>
               </Link>
              <Link to='Journal'>
                  <li className='hover:font-bold hover:text-[#262626]'>Journal</li>
                </Link>
            </ul>
            )}
          </div>
          <div className="relative">
            <input type="text" placeholder="search product" className="p-[15px] bg-white w-[550px] broder-none outline-none"/>
            < IoSearchSharp className=" absolute right-0 top-1/2 -translate-y-1/2 "/>
          </div>
          <div className="flex gap-x-3 relative">
            <div className="flex gap-1">
            <div className="" onClick={() => setshowCatrgoryi(!showCategoryi)}>
              <FaUser/>
              { showCategoryi && (
            <ul className="absolute right-5 top-10 bg-gray-300 p-3 rounded-2xl">
              <Link to='/'>
                <li className='hover:font-bold hover:text-[#262626]'>Beauty</li>
              </Link>
              <Link to='Shope'>
                <li className='hover:font-bold hover:text-[#262626]'>Fragranes</li>
              </Link>
              <Link to='About'>
                <li className='hover:font-bold hover:text-[#262626]'>Furniture</li>
              </Link>
              <Link to='Contacts'>
                 <li className='hover:font-bold hover:text-[#262626]'>Groceries</li>
               </Link>
              <Link to='Journal'>
                  <li className='hover:font-bold hover:text-[#262626]'>Journal</li>
                </Link>
            </ul>
            )}
            </div>
            <FaCaretDown/>
            </div>
            <FaShoppingCart/>
          </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Header