
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/Cart/cartPage";

import HealthCarePage from "../Pages/HealthCare/HealthCarePage";
import LabTestPage from "../Pages/LabTest/LabTestPage";
import {Home} from "../Lokesh_HomePage/LokeshPages/Home"
import SingleProductPage from "../Pages/singleProductPage/SingleProductPage";
import ProductsPage from "../Pages/productspage/productspage"
// import OrderMedicines from "../Pages/OrderMedicines/OrderMedicines";

// import RtpcrTest from "../Pages/RtpcrTest/RtpcrTest";
import { Navbar } from "../Prem/Nav_Components/Navbar";
import { Navbar_Update } from "../Navbar_Component/Navbar_Update";



const Mainroutes = () => {
  return (
    <div>
      <Navbar />
      <Navbar_Update/>
      <Routes>
        <Route path="/" element={<Home />} />
    
        {/* <Route path="/orderMed" element={<OrderMedicines />} /> */}
        <Route path="/HealthCare" element={<HealthCarePage />} />
        <Route path="/cart" element={<CartPage />} />
       
        <Route path="/labtest" element={<LabTestPage />} />

        <Route path="/product" element={<ProductsPage />} />
        <Route path="/singleproduct" element={<SingleProductPage />} />
        
        {/* <Route path="/rtpcr" element={<RtpcrTest />} /> */}
      
       
        
      
      </Routes>
      
     
    </div>
  );
};

export default Mainroutes;
