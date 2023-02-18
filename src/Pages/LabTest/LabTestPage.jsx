import React from "react";
import Ad from "../../Abhay_components/Ad";
import Discription from "../../Abhay_components/Discription";
import FourTest from "../../Abhay_components/FourTest";
import HideAndShowText from "../../Abhay_components/HideAndShowText";
import ImgSlider from "../../Abhay_components/ImgSlider";
import Lab from "../../Abhay_components/Lab";
import Privious from "../../Abhay_components/Privious";
import Footer from "../../Ankita_Components/Footer/Footer";
import HomeDescription from "../../Lokesh_HomePage/LokeshComponents/Home_Description";
import { Home_unknown_section } from "../../Lokesh_HomePage/LokeshComponents/Home_unknown_section";

const LabTestPage = () => {
  return (
    <div>
      <ImgSlider />
      <FourTest />
      <Ad />
      <Privious />
      <Lab />
      <Discription />
      <HideAndShowText />

      <section className="home_unknown_section">
        <Home_unknown_section />
      </section>
      
      <section>
        <HomeDescription />
      </section>

      <Footer />
    </div>
  );
};

export default LabTestPage;
