import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Carousel from 'react-bootstrap/Carousel';
import MediaQuery from 'react-responsive'
import c1 from "./CarouselImages/c1.jpg"
import c2 from "./CarouselImages/c2.jpg"
import c3 from "./CarouselImages/c3.jpg"
import c4 from "./CarouselImages/c4.jpg"
import c5 from "./CarouselImages/c5.jpg"
import c6 from "./CarouselImages/c6.jpg"
import './css/HealthcareCarousel.css'
import "bootstrap/dist/css/bootstrap.css";
const HealthcareCarousel=()=> {


  return (
    <>
   
    {/* <div className="carousel" style={{width:"800px", height:"70px" ,margin:"auto", marginTop:"20px", marginBottom:"300px"}} > */}
    <Carousel  interval={1000}>
      
      <Carousel.Item className="item_container">
        <section style={{display:"flex",spaceBetween:"20%",}}>
        <img
        //  style={{width:"600px", height:"200px",marginLeft:"100px",marginRight:"100px", marginTop:"20px", marginBottom:"30px"}}
          className="d-block w-100"
          src={c2}
          alt="Second slide"
          padding="0 7px 0 7px"
        />
         <img
        //  style={{width:"500px", height:"200px" , marginTop:"20px", marginBottom:"30px",marginLeft:"100px",marginRight:"100px"}}
          className="d-block w-100"
          src={c3} 
          alt="Third slide"
      
        />    
     
        </section>
        
     
      </Carousel.Item>
      {/* <Carousel.Item className="item_container">
    
       
       
      

        
      </Carousel.Item> */}
      <Carousel.Item>
      <section style={{display:"flex",marginRight:"2%"}}>
        <img
        //  style={{width:"500px", height:"200px" , marginTop:"20px", marginBottom:"30px",marginLeft:"100px",marginRight:"100px"}}
          className="d-block w-100"
          src={c4} 
          alt="Third slide"
      
        />
        
      
        <img
        //  style={{width:"500px", height:"200px" , marginTop:"20px", marginBottom:"30px",marginLeft:"100px",marginRight:"100px"}}
          className="d-block w-100"
          src={c5} 
          alt="Third slide"
         
        />
        </section>
      </Carousel.Item>
      {/* <Carousel.Item>
      
        
        
      </Carousel.Item> */}
      <Carousel.Item>
     <section style={{display:"flex",marginRight:"2%"}}>
        <img
          className="d-block w-100"
          // style={{width:"500px", height:"200px" , marginTop:"20px", marginBottom:"30px",marginLeft:"100px",marginRight:"100px"}}
          src={c6} 
          alt="Third slide"
          
        />
          <img
      //  style={{width:"600px", height:"200px" ,marginLeft:"100px",marginRight:"100px", marginTop:"20px", marginBottom:"30px"}}
        className="d-block w-100"
        src={c1}
        alt="First slide"
      
      />
        
        </section>
 
   
    </Carousel.Item>
 
     
      
    </Carousel>
    {/* </div> */}
    </>
  );
}

export default HealthcareCarousel;