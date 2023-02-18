import { Image, Stack, Text ,SimpleGrid,Box} from '@chakra-ui/react'
import React from 'react'
import { Categories, Company, NeedHelp, OurServices, Partners, PolicyInfo } from './FooterLinks'
import styles from "./footer.module.css"
import MediaQuery from 'react-responsive'
import {BsFacebook,BsInstagram,BsYoutube,BsTwitter} from "react-icons/bs"
const Footer = () => {
   
  return (
    //  addfooter logic
    <div  className={styles.container}>
        <MediaQuery minWidth={880} maxWidth={2000}>
        <SimpleGrid columns={4} spacing={100}>
            <Box gap="10px">
                <Text fontSize="16px" fontWeight="700">Company</Text>
                {Company.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
                <Text fontSize="16px" fontWeight="700" paddingTop="20px">Our Services</Text> 
                {OurServices.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
            </Box>
            <Box gap="10px" >
                <Text fontSize="16px" fontWeight="700">Featured Categories</Text>
                {Categories.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
            </Box>
            <Box gap="10px" >
                <Text fontSize="16px" fontWeight="700">Need Help</Text>
                {NeedHelp.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
                <Text fontSize="16px" fontWeight="700" paddingTop="20px">Policy Info</Text> 
                {PolicyInfo.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
            </Box>
            <Box gap="10px" marginRight="20px" >
                <Text fontSize="16px" fontWeight="700">Follow us on</Text>
                <Stack direction="horizontal" gap="25px">
                    <BsInstagram style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                    <BsFacebook style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                    <BsYoutube style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                    <BsTwitter style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                </Stack>
            </Box>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery minWidth={580} maxWidth={879}>
        <SimpleGrid columns={2} spacing={10}>
            <Box gap="10px" >
                <Text fontSize="16px" fontWeight="700">Company</Text>
                {Company.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
                <Text fontSize="16px" fontWeight="700" paddingTop="20px">Our Services</Text> 
                {OurServices.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
            </Box>
            <Box gap="10px">
                <Text fontSize="16px" fontWeight="700">Featured Categories</Text>
                {Categories.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
            </Box>
            <Box gap="10px" >
                <Text fontSize="16px" fontWeight="700">Need Help</Text>
                {NeedHelp.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
                <Text fontSize="16px" fontWeight="700" paddingTop="20px">Policy Info</Text> 
                {PolicyInfo.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
            </Box>
            <Box gap="10px" marginRight="20px" >
                <Text fontSize="16px" fontWeight="700">Follow us on</Text>
                <Stack direction="horizontal" gap="25px">
                    <BsInstagram style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                    <BsFacebook style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                    <BsYoutube style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                    <BsTwitter style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                </Stack>
            </Box>
            <Box gap="10px" marginRight="20px" >
                <Text fontSize="16px" fontWeight="700">Download the App for Free</Text>
                <Stack direction="horizontal" gap="25px">
                    <Image src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=256x0"></Image>
                    <Image src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=128x0"></Image>
                </Stack>
            </Box>
        </SimpleGrid>
        </MediaQuery>
        
        <MediaQuery minWidth={1} maxWidth={579}>
        <SimpleGrid columns={1}>
            <Box gap="10px" >
                <Text fontSize="16px" fontWeight="700">Company</Text>
                {Company.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
                <Text fontSize="16px" fontWeight="700" paddingTop="20px">Our Services</Text> 
                {OurServices.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
            </Box>
            <Box gap="10px">
                <Text fontSize="16px" fontWeight="700">Featured Categories</Text>
                {Categories.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
            </Box>
            <Box gap="10px" >
                <Text fontSize="16px" fontWeight="700">Need Help</Text>
                {NeedHelp.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
                <Text fontSize="16px" fontWeight="700" paddingTop="20px">Policy Info</Text> 
                {PolicyInfo.map((el,i) => (
                    <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">{el.link}</Text>
                ))}
            </Box>
            <Box gap="10px" marginRight="20px" >
                <Text fontSize="16px" fontWeight="700">Follow us on</Text>
                <Stack direction="horizontal" gap="25px">
                    <BsInstagram style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                    <BsFacebook style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                    <BsYoutube style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                    <BsTwitter style={{width:"25px",height:"25px",cursor:"pointer"}}/>
                </Stack>
            </Box>
            <Box gap="10px" marginRight="20px" >
                <Text fontSize="16px" fontWeight="700">Download the App for Free</Text>
                <Stack direction="horizontal" gap="25px">
                    <Image src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=256x0"></Image>
                    <Image src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=128x0"></Image>
                </Stack>
            </Box>
        </SimpleGrid>
        </MediaQuery>
        <MediaQuery minWidth={1000} maxWidth={2000}>
        <Stack gap="10px" marginBottom="40px" marginTop="60px" >
                <Text fontSize="16px" fontWeight="700">Our Payment Partners</Text>
                <Stack   direction="horizontal">
                    <SimpleGrid columns={10}>
                    {Partners.map((el,i) => (
                       
                        <Image key={i}  src={el.img} alt="none" width="50px" height="40px"  margin="0px 10px" />
                       
                        ))}
                    </SimpleGrid>
                    <Text  marginLeft="100px" fontSize="14px">© 2022 PharmEasy. All Rights Reserved</Text>
                </Stack>
        </Stack>
        </MediaQuery>
        <MediaQuery minWidth={680} maxWidth={999}>
        <Stack gap="10px" marginBottom="40px" marginTop="60px" >
                <Text fontSize="16px" fontWeight="700">Our Payment Partners</Text>
                <Stack   direction="horizontal">
                    <SimpleGrid columns={5} spacing={10}>
                    {Partners.map((el,i) => (
                       
                        <Image key={i}  src={el.img} alt="none" width="50px" height="40px"  margin="0px 10px" />
                       
                        ))}
                    </SimpleGrid>
                    
                </Stack>
                <Text fontSize="14px">© 2022 PharmEasy. All Rights Reserved</Text>
        </Stack>
        </MediaQuery>
        <MediaQuery minWidth={400} maxWidth={679}>
        <Stack gap="10px" marginBottom="40px" marginTop="60px" >
                <Text fontSize="16px" fontWeight="700">Our Payment Partners</Text>
                <Stack   direction="horizontal">
                    <SimpleGrid columns={3} spacing={10}>
                    {Partners.map((el,i) => (
                       
                        <Image key={i}  src={el.img} alt="none" width="50px" height="40px"  margin="0px 10px" />
                       
                        ))}
                    </SimpleGrid>
                   
                </Stack>
                <Text fontSize="14px">© 2022 PharmEasy. All Rights Reserved</Text>
        </Stack>
        </MediaQuery>
        <MediaQuery minWidth={1} maxWidth={399}>
        <Stack gap="10px" marginBottom="40px" marginTop="60px" >
                <Text fontSize="16px" fontWeight="700">Our Payment Partners</Text>
                <Stack   direction="horizontal">
                    <SimpleGrid columns={2} spacing={10}>
                    {Partners.map((el,i) => (
                       
                        <Image key={i}  src={el.img} alt="none" width="50px" height="40px"  margin="0px 10px" />
                       
                        ))}
                    </SimpleGrid>
                  
                </Stack>
                <Text fontSize="14px">© 2022 PharmEasy. All Rights Reserved</Text>
        </Stack>
        </MediaQuery>
    </div>
  )
}

export default Footer