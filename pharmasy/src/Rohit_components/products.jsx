import Card from "./card";
import "./products.css";
import { useState,useEffect } from "react";
import { Select, Text,Option,Checkbox,Box, filter, Button,Stack,Radio,RadioGroup,Flex } from "@chakra-ui/react";

const Products = ({ data }) => {
    
  const [productdata, setproductdata] = useState(data);
  const [max,setmax]=useState(1000)

useEffect(() => {




}, [productdata]);



const sortData=(e)=>{
    let value=e.target.value
    
    if(value=="ascending"){
        let map=[...productdata]
        let updateddata=map.sort((a,b)=>{
            return a.mrp-b.mrp
        })
    
        setproductdata([...updateddata])
     
    }
    else if(value=="decending"){
        let map=[...productdata]
        let updateddata=map.sort((a,b)=>{
            return b.mrp-a.mrp
        })
        setproductdata([...updateddata])
     
    }else{
        setproductdata(data)
    }
    
    }

    
    const FilterData=(e)=>{
if(e.target.value=="clear"){
    setmax(1000)
    setproductdata(data)
    return
}

        if(e.target.checked){
            let temp=[...data]
            let [first,second]=e.target.value.split(",").map(Number)
           

            let filteredData=temp.filter(ele=> Number(ele.mrp)<second 
            )

           setproductdata(filteredData)
           setmax(second)

        }



    }

  return (
   <div style={{width:"100%",display:"flex"}}>



<section id="Products-filter-section">

    <div>
          <div style={{ display: "flex" ,paddingLeft:"5%",marginTop:"10px"  }}>
            <Text mt={2} pr="4">
              Sort by:
            </Text>{" "}
            <Select w="auto" onChange={sortData}>

<option value="popularity">
    Popularity
</option>
<option value="ascending">
    Price low to high
</option>

<option value="decending">
Price high to low
</option>

                </Select>
          </div></div>
<div >
    <Text fontSize="xl"
    ml="15%" mt="20%" >Filter product by price</Text>
    <Button ml="30%" mt="6" value="clear" onClick={FilterData}>Clear filter</Button>
</div>


<div style={{display:"grid",paddingLeft:"30%",gap:"30px",marginTop:"10%"}}>  

    <Checkbox  isChecked={max==100} onChange={FilterData} value={[0,100]}>
    Below 100</Checkbox>
    <Checkbox isChecked={max==200} mt="2px" onChange={FilterData} value={[0,200]}>
    Below 200</Checkbox>
    <Checkbox isChecked={max==400} mt="2px" onChange={FilterData} value={[0,400]}>
    Below 400</Checkbox>
    <Checkbox isChecked={max==600} mt="2px"  onChange={FilterData} value={[0,600]}>
    Below 600</Checkbox>
    <Checkbox isChecked={max==800} mt="2px" onChange={FilterData} value={[0,800]}>
    Below 800</Checkbox>
   
    
    
    
    </div>
{/* <Text fontSize="xl"
    mt="20%" >Select Product by brand</Text>
   <div style={{display:"grid",paddingLeft:"30%",gap:"40px",marginTop:"10%"}}>  <Checkbox  isChecked={max==100} onChange={FilterData} value={[0,100]}>
    Dettol</Checkbox>
    <Checkbox isChecked={max==200} mt="5px" onChange={FilterData} value={[0,200]}>
      Nivea
   </Checkbox>
    <Checkbox isChecked={max==400} mt="5px" onChange={FilterData} value={[0,400]}>
    Vicks</Checkbox>
    <Checkbox isChecked={max==600} mt="5px"  onChange={FilterData} value={[0,600]}>
    Vasoline </Checkbox>
    <Checkbox isChecked={max==800} mt="5px" onChange={FilterData} value={[0,800]}>
    Luxor</Checkbox>
    <Checkbox isChecked={max==1200} mt="5px" onChange={FilterData} value={[0,1200]}>
    Detox</Checkbox>
                </div> */}

</section>

<section
      style={{ display: "flex", justifyContent: "center",width:"100%",paddingLeft:"20%"}}
    >
      <div style={{width:"100%"}}>
        <div
          style={{
            display: "flex",
           justifyContent:"space-between"
           
        ,
      padding:"0% 8% 4% 1%"
          }}
        >
          <Text fontWeight="bold" fontSize="4xl" color="gray.600">Health care</Text>

        </div>

        <div id="products-parent-div"  >
          {productdata!=[] && productdata.map((ele, index) => {
            return <Card key={index} ele={ele} />;
          })}{" "}
        </div>
      </div>
    </section>


   </div>
  );
};

export default Products;
