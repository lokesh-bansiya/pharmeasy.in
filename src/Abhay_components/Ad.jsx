import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Ad = () => {
  return (
    <Box w='80%' m='auto' display='-ms-grid' bg='#915fee' mb='30px' color='white'>
        <Flex>
        <Image height='30px' src='https://assets.pharmeasy.in/web-assets/dist/3864b471.svg'/>
        <Grid>
        <Text>Save 5% on allopathic medicines, 4% on lob tests & get Free delivery with PLUS membership </Text>
        <Text fontSize='13px'>Know more</Text>
        </Grid>
        </Flex>
    </Box>
  )
}

export default Ad