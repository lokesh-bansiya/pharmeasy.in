
import { Routes, Route } from "react-router-dom";


import HealthCarePage from "../Pages/HealthCare/HealthCarePage";
import LabTestPage from "../Pages/LabTest/LabTestPage";
import {Home} from "../Lokesh_HomePage/LokeshPages/Home"
import SingleProductPage from "../Pages/singleProductPage/SingleProductPage";
import ProductsPage from "../Pages/productspage/productspage"
import Cart from "../Pages/Cart/Cart";
import {Navbar_Update} from "../Navbar_Component/Navbar_Update"
// import OrderMedicines from "../Pages/OrderMedicines/OrderMedicines";

// import RtpcrTest from "../Pages/RtpcrTest/RtpcrTest";
import { Navbar } from "../Prem/Nav_Components/Navbar";
import PaymentPage from "../Pages/PaymentPage/Payment";
import Login from "../Abhay_Admin/Login";
import PrivateRoute from "../Abhay_Admin/PrivateRoutes"
import Dashboard from "../Ankita_Components/FinalAdmin/Dashboard"
import { AdminSide } from "../Ankita_Components/AdminSide/AdminSide";
import {Users} from "../Ankita_Components/FinalAdmin/users"
import Myprofile from "../Prem/Myprofile/Myprofile"
import Medicalrecord  from "../Prem/Myprofile/Medicalrecord"
import Wallet from "../Prem/Myprofile/Wallet"
import OrderMedicines from "../Pages/OrderMedicines/OrderMedicines"
import RtpcrTest from "../Pages/RtpcrTest/RtpcrTest"


const Mainroutes = () => {
  return (
    <div>
      <Navbar />
      <Navbar_Update/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orderMed" element={<OrderMedicines />} />
        <Route path="/HealthCare" element={<HealthCarePage />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/labtest" element={<LabTestPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/singleproduct" element={<SingleProductPage />} />
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/adminlogin" element={<Login/>}/>
        <Route path="/testadmin" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/users" element={<PrivateRoute><Users/></PrivateRoute>}/>
        <Route path="/adminpage" element={<AdminSide/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
        <Route path="/myprofile" element={<Myprofile/>}/>
        <Route path="/medicalrecord" element={<Medicalrecord/>}/>
        <Route path="/rtpcr" element={<RtpcrTest />} />
      </Routes>
      
     
    </div>
  );
};

export default Mainroutes;
