import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack
} from "@chakra-ui/react";
import { Navbar } from "./Navbar";
export const Users = () => {
  const users = [
    {
      name: "Jagpreet",
      email: "jagdeepsignh45@gmail.com",
      address: "punjab ,first floor,567654",
    },
    {
      name: "Ajay Prakash",
      email: "ajayPrakash@gmail.com",
      address: "delhi,first floor,110003",
    },
    {
      name: "Pushkr",
      email: "pushker45@gmail.com",
      address: "haryana ,Gali no-1,567654",
    },
    {
      name: "Ankita Thakur",
      email: "ankitasignh45@gmail.com",
      address: "Himachal Pradesh ,first floor,178909",
    },
    {
      name: "Rohan",
      email: "Rohankumar45@gmail.com",
      address: "Maharastra ,first floor,489654",
    },
    {
      name: "Prem",
      email: "signh45@gmail.com",
      address: "Odisha ,main bazar odisha,567654",
    },
    {
      name: "Vaibhav",
      email: "vaibhavsignh45@gmail.com",
      address: "Delhi ,Dawarka,567654",
    },
    {
      name: "Dipali",
      email: "Diplai67@gmail.com",
      address: "Kolkata,house no-1,567654",
    },
    {
      name: "Sooraj",
      email: "sooraj45@gmail.com",
      address: "Delhi ,Jankpuri,110063",
    },
    {
      name: "Gaurav",
      email: "Gauravsignh45@gmail.com",
      address: "vaishali ,near metro station,120010",
    },
  ];
  return (
    <>
<Navbar/>
    <Stack marginLeft="8em" marginRight="8em" marginTop="2em">
      user side page
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead  >
            <Tr fontSize={20} fontWeight= 'bold'>
            <Th>id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Address</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.length > 0 && users.map((e,i) => 
            <Tr key={i}>
           <Td>{i}</Td>
            <Td>{e.name}</Td>
            <Td>{e.email}</Td>
            <Td>{e.address}</Td>
            </Tr>
            )}
            
          </Tbody>
        </Table>
      </TableContainer>
      </Stack>
      </>
  );
};
