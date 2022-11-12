import { Link } from "react-router-dom";
import "./Home_Styles/Home_First_Section.css";


const Home_First_Section = () => {
    return(
        <div className="Home_first_top_section">
            <Link to="/orderMed">
                <div>
                <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0" alt="" />
                <p>Medicine</p>
                <p>UPTO 20% OFF</p>
                </div>
            </Link>
            <Link to="/labtest"><div>
                <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0" alt="" />
                <p>Lab Tests</p>
                <p>UPTO 70% OFF</p>
            </div>
            </Link>
            <Link to="/healthcare"><div>
                <img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0" alt="" />
                <p>Healthcare</p>
                <p>UPTO 60% OFF</p>
            </div>
            </Link>
            <Link to="/orderMed"><div>
                <img src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0" alt="" />
                <p>Health Blogs</p>
                <p style={{color: "whitesmoke"}}>EXTRA</p>
            </div>
            </Link>
            <Link to="/rtpcr"><div>
                <img src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0" alt="" />
                <p>PLUS</p>
                <p>SAVE 5% EXTRA</p>
            </div>
            </Link>
            <Link to="/orderMed"><div>
                <img src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0" alt="" />
                <p>Offers</p>
                <p style={{color: "whitesmoke"}}>EXTRA</p>
            </div>
            </Link>
            <Link to="/orderMed"><div>
                <img src="https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=720x0" alt="" />
                <p>Surgeries</p>
                <p style={{color: "whitesmoke"}}>EXTRA</p>
            </div>
            </Link>
            <Link to="/healthcare"><div>
                <img src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0" alt="" />
                <p>Value Store</p>
                <p>UPTO 50% OFF</p>
            </div>
            </Link>
        </div>
    );
}

export {Home_First_Section};

