import { Box, Button, Flex, Grid, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'

const FourTest = () => {
  return (
    <Box w='80%' m='auto'>
      <Flex display={{ base: "flex" }} gridAutoRows='-moz-initial' justifyContent='space-around' mb='20px'
        w={['80vw', '80vw', '80vw', '80vw']}
        direction={['column', 'row', 'row', 'row']}
        justify='center'
        rounded='lg'
        p={4}
        gap='10px'


      >
        <Button w={['100%', "25%", "20%", '20%']} fontSize={['15px', '12px', '13px', '15px']} textAlign='center' height='4rem' borderRadius='10'>
          <Image h={['50%', '35%', '50%', '50%']} src='https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg' />
          <Text>All Test</Text>
        </Button>

        <Button w={['100%', "25%", "20%", '20%']} fontSize={['15px', '12px', '13px', '15px']} textAlign='center' height='4rem' borderRadius='10'>
          <Image h={['50%', '35%', '50%', '50%']} src='https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg' />
          <Grid>
            <Text>Health </Text>
            <Text>Packages</Text>
          </Grid>
        </Button>

        <Button w={['100%', "25%", "20%", '20%']} fontSize={['15px', '12px', '13px', '15px']} textAlign='center' height='4rem' borderRadius='10'>
          <Image h={['50%', '35%', '50%', '50%']} src='https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg' />
          <Grid>
            <Text>Upload </Text>
            <Text>Prescriptioin</Text>
          </Grid>
        </Button>

        <Button w={['100%', "25%", "20%", '20%']} fontSize={['15px', '12px', '13px', '15px']} textAlign='center' height='4rem' borderRadius='10'>
          <Image h={['50%', '35%', '50%', '50%']} src='https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg' />

          <Grid>
            <Text>Block </Text>
            <Text> on Call</Text>
          </Grid>
        </Button>
      </Flex>
    </Box>
  )
}

export default FourTest