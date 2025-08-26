import React from 'react';
import Container from '/src/components/Container';
import Flex from '../Flex';
import { PiNumberTwoBold, } from "react-icons/pi";
import { FaTruck, FaUndo } from "react-icons/fa";

const Terms = () => {
  return (
    <>
    <div className="py-4 bg-gray-100">
        <Container>
        <Flex className={"items-center justify-between"}>
            <div className=" flex gap-x-2 items-center text-gray-400">
                <PiNumberTwoBold className="text-black"/>
                Two Years Warranty
            </div>

            <div className="flex gap-x-2 items-center text-gray-400">
                <FaTruck className="text-black"/>
                Free Shipping
            </div>

            <div className="flex gap-x-2 items-center text-gray-400">
                <FaUndo className="text-black"/>
                Return Policy in 30 Days
            </div>
        </Flex>
    </Container>
    </div>
    </>
  )
}

export default Terms