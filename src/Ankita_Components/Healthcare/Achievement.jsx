import React from "react";
import img1 from "./CarouselImages/img1.png";
import img2 from "./CarouselImages/img2.png";
import img3 from "./CarouselImages/img3.png";
import {Stack,SimpleGrid,Box,Text,Image} from '@chakra-ui/react'
export const  Achievement=()=>{
    return(
        <>
         <Stack padding="2em" color="#4f585e"  textAlign="left" height="auto" >
            <SimpleGrid width="auto" marginLeft="13em" marginRight="13em" columns={3} spacing={10}>
                <Box  >
                    <Image boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' borderRadius="100px" width="80px"src={img3}></Image>
                    <Text  fontWeight="bold">
                    1 Lakh+ Products
                    </Text>
                    <Text>
                        We maintain strict quality controls on all our partner retailers, so that you always get standard quality products.
                    </Text>
                </Box>
                <Box    >
                    <Image boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'borderRadius="100px" width="80px" src={img2}></Image>
                    <Text  fontWeight="bold">Secure Payment</Text>
                    <Text>100% secure and trusted payment protection</Text>
                    
                </Box>
                <Box  >
                    <Image boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'borderRadius="100px"  width="80px"src={img1}></Image>
                    <Text  fontWeight="bold">Easy Return</Text>
                    <Text>We have a new and dynamic return window policy for medicines and healthcare items. Refer FAQs section for more details.</Text>
                </Box>
            </SimpleGrid>
         </Stack>
        </>
    )
}