import React from 'react'
import Container from '/src/components/Container'
import Flex from '../Flex'
import Images from '../Images'
import phones from '/src/assets/phones.png'
import Electronics from '/src/assets/Electronics.png'
import Furniture from '/src/assets/Furniture.png'

const Sales = () => {
  return (
    <>
    <div className='pt-[170px] pb-[140px]'>
        <Container>
            <Flex className={"gap-x-8.5 items-start"}>
                <div className='w-1/2'>
                    <Images imgSrc={phones} className={"w-full"}/>
                </div>
                <div className='w-1/2'>
                    <Images imgSrc={Electronics}className={"pb-8.5 w-full"}/>
                    <Images imgSrc={Furniture}className={"w-full"}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Sales