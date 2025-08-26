import React from 'react'
import Container from '/src/components/Container'
import Product from '../Product'
import Flex from '../Flex'
import productOne from '/src/assets/productOne.png'
import productTwo from '/src/assets/productTwo.png'
import productThree from '/src/assets/productThree.png'
import productFour from '/src/assets/productFour.png'

const BestSelling = () => {
  return (
    <>
     <div className="mt-20">
        <Container>
            <h3 className="pb-4 font-bold text-3xl">Best Selling</h3>
            <Flex className={"gap-x-7"}>
              <Product ProductImg={productOne} ProductBadge={"NEW"}/>
              <Product ProductImg={productTwo} ProductBadge={"10%"}/>
              <Product ProductImg={productThree} ProductBadge={"NEW"}/>
              <Product ProductImg={productFour} ProductBadge={"NEW"}/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default BestSelling