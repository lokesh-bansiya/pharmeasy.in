import Products from "../../Rohit_components/products";
import {skincareProducts,homecareProducts } from "../../data/data"

const ProductsPage=()=>{

const data=[...skincareProducts,...homecareProducts]
return(
    <div >


<div style={{width:"100%"}}>
<Products data={data}/></div>


    </div>
)
}

export default ProductsPage