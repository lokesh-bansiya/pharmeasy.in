import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import PriviousCart from './PriviousCart';

const users = [
  {
    id: 1,
    avatar_url: "https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg",
    name: "Covid-19 RTPCR (Coronavirus Sars -CoV2",
    name1: 'Avilable at 1 other labs but not ...',
    price: '₹800'
  },
  {
    id: 2,
    avatar_url: "https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg",
    name: "Throid Stimulation Hormone",
    name1: 'Available at 1 cerfied lav',
    price: '₹200'
  },
  {
    id: 3,
    avatar_url: "https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg",
    name: "Dengue NS 1 Antigen",
    name1: 'Avilable at 1 other labs but not ...',
    price: '₹500'
  }
];

const userAvatars = users.map((user) => {
  return (
    <PriviousCart
      key={user.id}
      src={user.avatar_url}
      name={user.name}
      name1={user.name1}
      price={user.price}

    />
  );
});
function Privious() {
  return (
    <Box width='80%' margin='auto'  >
      <Text mb='10px'>Previously Browsed By You</Text>
      <Box display={['grid', 'flex', 'flex', 'flex']}
        w={['80vw', '80vw', '80vw', '80vw']}
        direction={['column', 'row', 'row', 'column']}>
        {userAvatars}

      </Box>



    </Box>

  );
}
export default Privious
