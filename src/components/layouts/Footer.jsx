import React from 'react';
import Container from '/src/components/Container';
import Flex from '../Flex';
import { Link } from 'react-router-dom';
import Images from '../Images';
import logo from '/src/assets/logo.png';


const Footer = () => {
  return (
    <div className="py-10 bg-[#F5F5F3]Catagory">
      <Container>
      <Flex className="justify-between items-center">
        <div className=''>
          <h3 className="text-xl">MENU</h3>
          <ul className="gap-x-5 font-normal text-[15px] text-[#767676]">
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
        <div className=''>
          <h3 className="text-xl">SHOP</h3>
          <ul className="gap-x-5 font-normal text-[15px] text-[#767676]">
                    <Link to='/'>
                    <li className='hover:font-bold hover:text-[#262626]'>Catagory1</li>
                    </Link>
                    <Link to='Shope'>
                    <li className='hover:font-bold hover:text-[#262626]'>Catagory2</li>
                    </Link>
                    <Link to='About'>
                    <li className='hover:font-bold hover:text-[#262626]'>Catagory3</li>
                    </Link>
                    <Link to='Contacts'>
                    <li className='hover:font-bold hover:text-[#262626]'>Catagory4</li>
                    </Link>
                    <Link to='Journal'>
                    <li className='hover:font-bold hover:text-[#262626]'>Catagory5</li>
                    </Link>
                </ul>
        </div>
        <div className=''>
          <h3 className="text-xl">HELP</h3>
          <ul className="gap-x-5 font-normal text-[15px] text-[#767676]">
                    <Link to='/'>
                    <li className='hover:font-bold hover:text-[#262626]'>privacy policy</li>
                    </Link>
                    <Link to='Shope'>
                    <li className='hover:font-bold hover:text-[#262626]'>terms and conditions</li>
                    </Link>
                    <Link to='About'>
                    <li className='hover:font-bold hover:text-[#262626]'>special e shop</li>
                    </Link>
                    <Link to='Contacts'>
                    <li className='hover:font-bold hover:text-[#262626]'>shipping</li>
                    </Link>
                    <Link to='Journal'>
                    <li className='hover:font-bold hover:text-[#262626]'>secure payment</li>
                    </Link>
                </ul>
        </div>
        <div className=''>
          <h3 className="text-xl"> (052)611-5711 </h3>
          <h3 className="text-xl">Company@domain.com</h3>
          <h3 className="text-[#262626]">545 Crescent Ave.Quakertown, PA 18951 </h3>
        </div>
        <div className=''>
          <Images imgSrc={logo}/>
        </div>
      </Flex>
    </Container>
    </div>
  )
}

export default Footer