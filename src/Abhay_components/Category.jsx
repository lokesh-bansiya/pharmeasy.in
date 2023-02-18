// import { Box } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";

// const getData = (url) => {
//   return fetch(url).then((res) => res.json());
// };

// function Category() {
//   const [data, setData] = useState({});
//   const [page, setPage] = useState(1);
//   const [searchParams, setSearchParams] = useSearchParams();
//   useEffect(() => {
//     getData(`https://reqres.in/api/users`).then((res) => {
//       setData(res);
//     });
//   }, [page]);
//   useEffect(() => {
//     setSearchParams( );
//   },[]);

//   return (
//     <Box display='flex'  overflowX= "scroll">
     

   
//       {data?.data?.map((item) => (

//         <Box key={item.id} ml='20px'   >
//           <img src={item.avatar} alt="image" />
//           <p>{item.first_name}</p>


//           {/* <Link to={`/category/${item.id}`}>more</Link> */}
//         </Box>
//       ))}

    
//     </Box>
//   );
// }
// export default Category;
