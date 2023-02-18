import React from "react"
import {Stack,SimpleGrid,Box,Text,Image} from '@chakra-ui/react'
import MediaQuery from 'react-responsive'
export const DownLoadApp=()=>{
    return(
        <>
        <MediaQuery minWidth={1200} maxWidth={2000}>
        <Stack textAlign="left"  color="#4f585e" fontSize="20px">
            <Stack>
                <SimpleGrid columns={3} spacing={10}>
                    <Box   paddingLeft="150px">
                        <Image width="200px"src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"></Image>
                    </Box>
                    <Box >
                        <Text>Download the App for Free</Text>
                        <SimpleGrid columns={2}>
                        <Image width="200px" src="https://th.bing.com/th/id/OIP.GZhmkG200Ppz-ezObC3JfQHaCi?w=322&h=120&c=7&r=0&o=5&pid=1.7"></Image>
                        <Image  width="300px" marginTop="5px"src="https://th.bing.com/th/id/OIP.5xN-oHRXvQvggGktHby3ugHaCM?w=347&h=103&c=7&r=0&o=5&pid=1.7"></Image>
                        </SimpleGrid>
                    </Box>
                    <Box></Box>
                    
                </SimpleGrid>
            </Stack>
        </Stack>
        </MediaQuery>
        <MediaQuery minWidth={1} maxWidth={1199}>
        <Stack textAlign="left"  color="#4f585e" fontSize="20px">
            <Stack>
                <SimpleGrid columns={1} spacing={10}>
                    <Box   paddingLeft="150px">
                        <Image width="200px"src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"></Image>
                    </Box>
                    <Box >
                        <Text>Download the App for Free</Text>
                        <SimpleGrid columns={2}>
                        <Image width="200px" src="https://th.bing.com/th/id/OIP.GZhmkG200Ppz-ezObC3JfQHaCi?w=322&h=120&c=7&r=0&o=5&pid=1.7"></Image>
                        <Image  width="200px" marginTop="5px"src="https://th.bing.com/th/id/OIP.5xN-oHRXvQvggGktHby3ugHaCM?w=347&h=103&c=7&r=0&o=5&pid=1.7"></Image>
                        </SimpleGrid>
                    </Box>
                 
                    
                </SimpleGrid>
            </Stack>
        </Stack>
        </MediaQuery>
        </>
    )
}