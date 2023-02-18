import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "../FinalAdmin/Navbar";
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
  Button,Flex,useToast
} from "@chakra-ui/react";
import axios from "axios";
import { PostRequest } from "./Post";
import "./admin.css";


export const AdminSide = () => {
  const toast=useToast()
  const [data, setdata] = useState("");
  const [deldata, setdeldata] = useState(true);
  const ref = useRef();

  const deldataoflist = (id) => {
    axios
      .delete(`http://localhost:8080/posts/${id}`)
      .then((r) => {
       getData()
      })
      .catch((e) => {
        console.log(e);
      });

      toast({
        title: "Item has been deleted from the database",
        position: "top",
        isClosable: true,
        status:"error"
      })
  
       
 
   
  };

  const getData = () => {
    axios
      .get(`http://localhost:8080/posts`)
      .then((r) => {
        const admindata = r.data;
        console.log(admindata);
        setdata(admindata);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* <Stack marginBottom={3}>
        <Box width="100%" height="80px" backgroundColor="#10847e">
          <Image
            src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
            width="150px"
            marginLeft="20%"
            marginTop="1.5%"
          ></Image>

          <Text marginLeft="60%" marginTop="-2.5%" color="white">
            Admin page
          </Text>
        </Box>
      </Stack> */}
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
                  <img style={{maxHeight:"70%",maxWidth:"80%"}} src={el.image} alt="" />
                </div>
          
                <div
                  style={{
                    textAlign: "start",
                    paddingLeft: "10px",
                    fontSize: "0.9em",
                    fontSize:"16px"
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
                    {el.category}
                  </p>
                  <p >
                  {el.name}
                  </p>
                 <div style={{display:"flex",alignItems:"center"}}>
                 <p style={{ fontWeight: "bold" }}>
                    ₹{el.price} &nbsp;{" "}
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
                 <Button onClick={()=>deldataoflist(el.id)} width="90%" colorScheme="red"  mt={5}>Delete</Button>
                </div>
                
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};
