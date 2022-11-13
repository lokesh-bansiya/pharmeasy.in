import { Link } from "react-router-dom";
import "./Home_Styles/Shop_by_Categories.css";


const Shop_by_Categories = () => {
    return (
        <div>
            <p className="p-tag_Categories_Brands">Shop by Categories</p>
            <div className="Home_Categories_Brands">
                <Link to="/healthcare">
                <div className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b26fa52dd35339e1a4e00c47b04e12d0.jpg?f=jpg?dim=360x0" alt="" />
                    </div>
                    <div>
                        Pet Care
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png?dim=360x0" alt="" />
                    </div>
                    <div>
                        HealthCare Devices
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=360x0" alt="" />
                    </div>
                    <div>
                        Personal Care
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=360x0" alt="" />
                    </div>
                    <div>
                        Health Food
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/403b8ada7b113c7cb2e8d09e3420edfa.png?f=png?dim=360x0" alt="" />
                    </div>
                    <div>
                        Beauty
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png?dim=360x0" alt="" />
                    </div>
                    <div>
                        Elderly Care
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export {Shop_by_Categories};