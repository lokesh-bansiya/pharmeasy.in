import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "../FinalAdmin/Navbar";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormHelperText,
  Input,
  FormLabel,
} from '@chakra-ui/react'
import {
  Image,
  Stack,
  Text,
  SimpleGrid,
  Box,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Button,Flex,useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { PostRequest } from "./Post";
import "./admin.css";
import backend_url from "../../backendurl";


export const AdminSide = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast=useToast()
  const [data, setdata] = useState("");
  const [deldata, setdeldata] = useState(true);
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [discount, setdiscount] = useState("");
  const [seletedID,setSelectedID]=useState("") //this one set the Id of the product that needs to update
  const ref = useRef();

  const deldataoflist = (id) => {
    axios
      .delete(`${backend_url}/products/${id}`)
      .then((r) => {
      toast({
        status:"info",
        title:"Product deleted from the Database",
        position:"top"
      })
       getData()
      })
      .catch((e) => {
        console.log(e);
      });

  
       
 
   
  };

  const getData = () => {
    axios
      .get(`${backend_url}/products`)
      .then((r) => {
        const admindata = r.data;
        setdata(admindata);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function HandleProductEdit(id){
onOpen()

setSelectedID(id)


  }

  async function submitEdit(){

    console.log(image,name,price,discount)

    try{
      axios.patch(`${backend_url}/products/${seletedID}`, {      
        img1:image,
        title:name,
        mrp:price,
        strike: price-discount,
        discount:discount
             })
             .then(function (response) {
              toast({
                title: "Product Updated Successfull",
                position: "top",
                status:"success"
              
              })
              getData()
             })


    }catch(err){


      toast({
        title:"Error in updating Product",
        status:"error",
        position:"top",
        isClosable:true


      })
    }

    onClose()
   

  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
<Navbar/>

      <Box display="flex">
        <Box
          position="fix"
          //    height="400px"
          width="40%"
        >
          <PostRequest getdata={getData} />
        </Box>
        <SimpleGrid
        marginTop={10}
          marginRight={20}
          overflow="hidden"
          overflow-x="hidden"
          columns={3}
          spacing={20}
        //   height="800px"
          width="60%"
        >
          {data.length > 0 &&
            data.map((el) => (
              <Box
              h="350px"
              w="231px"
              padding="20px 10px"
              transition="all 0.8s ease"
              border="1.5px solid #e2e6e8"
              borderRadius="lg"
              cursor="pointer"
              _hover={{
                border: "1.5px solid #0b8e87",
                transition: "all 0.5s ease",
                transform: "translateY(-3px)",
                boxShadow: " rgba(17, 17, 26, 0.2) 0px 10px 16px",}} >
                <div
                id="card-img-div"
                  style={{
                    height: "170px",
                   
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img style={{maxHeight:"70%",maxWidth:"80%"}} src={el.img1} alt="" />
                </div>
          
                <div
                  style={{
                    textAlign: "start",
                    paddingLeft: "10px",
                    fontSize: "0.9em",
                    fontSize:"16px",
                  
                  }}
                >
                  <p
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      lineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      color:"teal"
                      
                    }}
                  >
          
                  </p>
                  <p style={{
                     width: "100%",
                     whiteSpace: "nowrap",
                     overflow:"hidden",
                     textOverflow: "ellipsis"
                  }} >
                  {el.title}
                  </p>
                 <div style={{display:"flex",alignItems:"center"}}>
                 <p style={{ fontWeight: "bold" }}>
                    ₹{el.mrp} &nbsp;{" "}
                    </p>
                    <Flex
                            align="center"
                            justify="start"
                            px="6px"
                            color="white"
                            fontSize="10px"
                            fontWeight="600"
                            height="100%"
                            w="35%"
                            bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                          >
                            {el.discount}% OFF
                          </Flex>
                          
                 </div>
                 <Box display="flex" justifyContent="space-around">

                  <Button onClick={()=>HandleProductEdit(el._id)} colorScheme="linkedin"  mt={5}>Edit</Button>
 <Button onClick={()=>deldataoflist(el._id)} colorScheme="red"  mt={5}>Delete</Button>
                 </Box>
                </div>
                
              </Box>
            ))}
        </SimpleGrid>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          <ModalBody>
          <FormControl
            boxShadow=" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
             
              paddingLeft={10}
              paddingRight={10}
              paddingTop={10}
              paddingBottom={10}
            >
              <FormHelperText color="orange" fontSize="25px" textAlign="center">
                Edit Product
              </FormHelperText>
              <FormLabel paddingTop={5} color="teal">
                Name
              </FormLabel>
              <Input
                border="1px solid teal"
                onChange={(e) => setname(e.target.value)}
                type="text"
              />
              <FormLabel paddingTop={5} color="teal">
                Image
              </FormLabel>
              <Input
                border="1px solid teal"
                onChange={(e) => setimage(e.target.value)}
                type="url"
              />
              <FormLabel paddingTop={5} color="teal">
                Price
              </FormLabel>
              <Input
                border="1px solid teal"
                onChange={(e) => setprice(e.target.value)}
                type="number"
              />
              <FormLabel paddingTop={5} color="teal">
                Discount
              </FormLabel>
              <Input
                border="1px solid teal"
                onChange={(e) => setdiscount(e.target.value)}
                type="text"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={submitEdit} colorScheme="linkedin">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    </div>
  );
};
