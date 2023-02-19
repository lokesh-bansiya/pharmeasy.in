import {
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
  Input,
  HStack,
  Radio,
  RadioGroup,
  SimpleGrid,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import "./admin.css";
import axios from "axios";
import { useRef } from "react";
import backend_url from "../../backendurl";

export const PostRequest = ({ getdata }) => {
  const toast = useToast();
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [discount, setdiscount] = useState("");
  const [category, setCategory] = useState("");
  const [val, getval] = useState(true);
  const ref = useRef();
  const getvalfun = () => {
    ref.current = val;
    getval(!ref.current);
    console.log(val);
    console.log("rhbff");
  };

  const postdata = async () => {
    try {
      axios
        .post(`${backend_url}/products`, {
          img1: image,
          title: name,
          mrp: price,
          strike: price - discount,
          discount: discount,
        })
        .then(function (response) {
          toast({
            title: "Product has been added successfully in a database",
            position: "top",
            status: "success",
          });

          getdata();
        });
    } catch (err) {
      toast({
        title: "Error in adding Product",
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };
  return (
    <>
      <div>
        <Stack margin="auto" width="90%">
          <FormControl
            boxShadow=" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            paddingLeft={10}
            paddingRight={10}
            paddingTop={10}
            paddingBottom={10}
          >
            <FormHelperText color="teal" fontSize="25px" textAlign="center">
              Add Product
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
            <FormLabel paddingTop={5} color="teal">
              Product Category
            </FormLabel>
            <RadioGroup
              color="teal"
              onChange={(e) => setCategory(e)}
              defaultValue="Itachi"
            >
              <HStack spacing="24px">
                <SimpleGrid columns={2}>
                  <Radio value="Healthcare">Healthcare</Radio>
                  <Radio value="Beuty">Beuty</Radio>
                  <Radio value="Homecare">Homecare</Radio>
                  <Radio value="Personal Care">Personal Care</Radio>
                </SimpleGrid>
              </HStack>
            </RadioGroup>
            <Button
              color="white"
              backgroundColor="teal"
              margin="auto"
              marginTop="10px"
              width="100%"
              onClick={postdata}
              type="submit"
            >
              Add Product
            </Button>
          </FormControl>
        </Stack>
      </div>
      {/* ) : (
        ""
      )} */}
    </>
  );
};
