import React from "react";
import { useState } from "react";
import "./Navbar_updated.css";
import { FaSearch, GenIcon } from "react-icons";
import { Link } from "react-router-dom";
import DrawerLogin from "../Prem/Nav_Components/DrawerLogin";

const Navbar_Update = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <section className="PharmEasy_Navbar_container">
        <div className="PharmEasy_Navbar_Top-section">
          <div className="image_logo">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
              alt="logo"
            />
          </div>
          <div>
            <div>Select Pincode ˅</div>
            <input placeholder="Search medicines/Healthcare products" />
            <div>
              <i class="fa fa-search"></i>
            </div>
          </div>
        </div>
        <div>
          <div className="PharmEasy_Navbar_grid">
            <Link to="/">
              {" "}
              <div>Order Medicines</div>
            </Link>
            <Link to="/">
              {" "}
              <div>Healthcare Products</div>
            </Link>
            <Link to="/">
              {" "}
              <div>Lab tests</div>
            </Link>
            <Link to="/">
              {" "}
              <div>RTPCR</div>
            </Link>
            <Link to="/">
              {" "}
              <div>Offers</div>
            </Link>
            <Link to="/">
              {/* <div><i  class="fa fa-sign-in"></i>Login/signup</div> */}
              <DrawerLogin />
            </Link>
            <Link to="/">
              {" "}
              <div>
                <i class="fa fa-shopping-cart"></i> Cart
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------- */}

      <div className="mainNavbarBox" style={{ width: "100%" }}>
        <div className="burgerNav">
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <div>
            <Link to="/">
              <div className="navlogo">
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
                  alt="logo"
                />
              </div>
            </Link>
          </div>
        </div>

        <div id="menu-class" style={{ height: "100vh" }} className={menu_class}>
          <div className="navinside">
            <Link to="/orderMed">
              <div onClick={updateMenu}>
                <a href="#">Order Medicines</a>
              </div>
            </Link>
            <Link to="/healthcare">
              <div onClick={updateMenu}>
                <a href="#">Healthcare Products</a>
              </div>
            </Link>
            <Link to="/labtest">
              <div onClick={updateMenu}>
                <a href="#">Lab tests</a>
              </div>
            </Link>
            <Link to="/rtpcr">
              <div onClick={updateMenu}>
                <a href="#">RTPCR</a>
              </div>
            </Link>
            <Link to="/">
              <div onClick={updateMenu}>
                <a href="#">Offers</a>
              </div>
            </Link>
            <Link to="/">
              {/* <div onClick={updateMenu}> */}
              {/* <a href="#"> */}
              <DrawerLogin />
              {/* </a> */}
              {/* </div> */}
            </Link>
            <Link to="/cart">
              <div onClick={updateMenu}>
                <a href="#">
                  <i class="fa fa-shopping-cart"></i> Cart
                </a>
              </div>
            </Link>
          </div>
          <div className="navinside1">
            <Link to="/">
              <div>
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
                  alt="logo"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export { Navbar_Update };
