
import SingleProduct from "../../Rohit_components/Singleproduct"
import { Container,Box, Flex, Text, Button, Image } from "@chakra-ui/react"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../../Ankita_Components/Footer/Footer"


const SingleProductPage=()=>{
    const navigate=useNavigate()
const [cartvalue,setcartvalue]=useState(0)

useEffect(()=>{
    const cartdata=JSON.parse(localStorage.getItem("cartData"))||[]
    setcartvalue(cartdata.length)

},[])
   return(
    <div  style={{marginTop:"40px",paddingLeft:"20px"}}>

    <Box display="flex" >

    <SingleProduct cartvalue={cartvalue} setcartvalue={setcartvalue}/>

    <Box mt="5%" w="40%" h="auto"  textAlign="start">
        <Text fontSize="large">{`${cartvalue} Item in cart`}</Text>
        <Button onClick={()=>navigate("/cart")} fontSize="larger" mt="20px" w="80"
        h="16" colorScheme="teal">View Cart</Button>
 
 
 <Box pl="5" w="80" h="20" borderRadius="5px" mt="30%" border="1.5px solid #e2e6e8">

    <Text color="gray.600" fontWeight="bold">Offer Just for You</Text>
    <Box mt="10px" display="flex"><Image w="35px" src="https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-2-1654077741.jpg" />
    
    <Text color="teal.600" ml="4" fontSize="xs">Get additional 10% off on Health products</Text></Box>

 </Box>
    </Box>


    </Box>
   


<Footer/>
    </div>
   )
}

export default SingleProductPage