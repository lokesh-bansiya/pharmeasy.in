import React from 'react'
import { Link } from 'react-router-dom'
import Admin from '../../Abhay_Admin/Admin'
import Login from '../../Abhay_Admin/Login'
import Ad from '../../Abhay_components/Ad'
import CommentSlider from '../../Abhay_components/CommentSlider'
import Discription from '../../Abhay_components/Discription'
import FourTest from '../../Abhay_components/FourTest'
import HideAndShowText from '../../Abhay_components/HideAndShowText'
import ImgSlider from '../../Abhay_components/ImgSlider'
import Lab from '../../Abhay_components/Lab'
import Privious from '../../Abhay_components/Privious'
import Footer from '../../Ankita_Components/Footer/Footer'
import HomeDescription from '../../Lokesh_HomePage/LokeshComponents/Home_Description'
import Home_Lab_Tests from '../../Lokesh_HomePage/LokeshComponents/Home_Lab_Tests'
import LabTestCarouselElements from '../../Lokesh_HomePage/LokeshComponents/Home_Lab_Tests_Carousel_Element'
import { Home_unknown_section } from '../../Lokesh_HomePage/LokeshComponents/Home_unknown_section'
import { Image_box_second } from '../../Lokesh_HomePage/LokeshComponents/Image_box_second'





const LabTestPage = () => {
  return (
    <div>
    
      <ImgSlider/>
      <FourTest/>
      <Ad/>
      <Privious/>
      <Lab/>
      <Discription/>
      <HideAndShowText/>
 

            <section className="home_unknown_section">
                <Home_unknown_section/>
            </section>
            <section>
                <HomeDescription/>
            </section>
      
    
     




      <Footer/>

    </div>
  )
}

export default LabTestPage