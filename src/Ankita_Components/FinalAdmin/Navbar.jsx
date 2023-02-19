import React from "react";
import { Image, Stack, Text ,SimpleGrid,Box,Button} from '@chakra-ui/react'
import { AdminSide } from "../AdminSide/AdminSide";
import { useNavigate } from "react-router-dom";
export const Navbar=()=>{
    const navigate=useNavigate()
    return(
        <>
        <Stack fontSize={20} fontWeight="semibold">

            
            <Box 
            
            
            
             box-sizing="border-box"
             
            
             position="-webkit-sticky" 
            //  position="sticky"
             top="0"
             z-index="100"
            display="flex"  width="100%" height="80px" backgroundColor="orange.400">
                <Box  onClick={()=>navigate("/testadmin")}marginLeft="40" marginTop="1%">
                    <Image  width="150px" src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"></Image>
                </Box>
                <Box  _hover={{color:"white"}}onClick={()=>navigate("/testadmin")} marginLeft="500" marginTop="1.5%">
                    Dashboard
                </Box>
                <Box  _hover={{color:"white"}} onClick={()=>navigate("/users")}marginLeft="20" marginTop="1.5%">
                    
                   Users
                </Box>
                <Box  _hover={{color:"white"}} onClick={()=>navigate("/adminpage")}marginLeft="20" marginTop="1.5%">
                    Add Product
                </Box>
            </Box>
        </Stack>
        </>
    )
}