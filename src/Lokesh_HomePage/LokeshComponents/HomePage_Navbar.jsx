import { useState } from "react";
import logo from "../Lokesh_Home_Image/logo.jpeg";
import { Link } from "react-router-dom";
import "./Home_Styles/HomePage_Navbar.css";

const HomePage_Navbar = () => {
  return (
    <>
      <section className="lokesh_home_navbar">
        <div>
          <div className="lokesh_home_nav_first-section">
            <Link to="/orderMed">
              <div>Medicine</div>
            </Link>
            <Link to="/labtest">
              <div>Lab Tests</div>
            </Link>
            <Link to="/healthcare">
              <div>Healthcare</div>
            </Link>
            <Link to="/healthcare">
              <div>Health Blogs</div>
            </Link>
            <Link to="/rtpcr">
              <div>PLUS</div>
            </Link>
            <Link to="/healthcare">
              <div>Offers</div>
            </Link>
            <Link to="/healthcare">
              <div>Surgeries</div>
            </Link>
            <Link to="/healthcare">
              <div>Value Store</div>
            </Link>
          </div>
        </div>
        <div>
          <div className="lokesh_home_nav_second-section">
            <Link to="/healthcare">
              <div>Navigate to</div>
            </Link>
            <Link to="/healthcare">
              <div>Categories</div>
            </Link>
            <Link to="/healthcare">
              <div>Deals of the day</div>
            </Link>
            <Link to="/healthcare">
              <div>Featured Brands</div>
            </Link>
            <Link to="/healthcare">
              <div>Lab Tests by Concern</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export { HomePage_Navbar };
