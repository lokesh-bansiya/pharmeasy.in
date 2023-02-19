import { Box, Image, Text } from "@chakra-ui/react";

function PriviousCart(props) {
    const { src, name,name1 ,price} = props;
   
 
    return (
      <Box borderRadius="5" width={['80%','80%','25%','25%']} boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' padding='10px 10px' ml="20px" mb='30px'>
        <Image height='30px'   src={src} alt="avatar-icon" />
        <Text>{name}</Text>
        <Text fontSize='15px'>{name1}</Text>
        <Text mt='20px'>{price}</Text>
        

      </Box>
    );
  }
  
  export default PriviousCart;