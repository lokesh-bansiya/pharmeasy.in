import { Link } from "react-router-dom";
import "./Home_Styles/Featured_Brands.css";

const Featured_Brands = () => {
    return (
        <div>
            <p className="p-tag_Featured_Brands">Featured Brands</p>
            <p className="p2-tag_Featured_Brands">Pick from our favourite brands</p>
            <div className="Home_Featured_Brands">
                <Link to="/healthcare">
                <div className="Home_Featured_Brands_Item">
                    <div>
                        <img src="https://cms-contents.pharmeasy.in/carousel_item/f9536c55ef1-App.jpg?dim=1440x0" alt="" />
                    </div>
                    <div>
                        Contour
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Featured_Brands_Item">
                    <div>
                        <img src="https://cms-contents.pharmeasy.in/carousel_item/3eb4eb6bfbe-App_Himalaya.jpg?dim=1440x0" alt="" />
                    </div>
                    <div>
                        Himalaya
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Featured_Brands_Item">
                    <div>
                        <img src="https://cms-contents.pharmeasy.in/carousel_item/40facc7fa28-Pharmeasy-App.jpg?dim=1440x0" alt="" />
                    </div>
                    <div>
                        Pharmeasy
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Featured_Brands_Item">
                    <div>
                        <img src="https://cms-contents.pharmeasy.in/carousel_item/a559f294d43-Vicks-min.png?dim=1440x0" alt="" />
                    </div>
                    <div>
                        Vicks
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Featured_Brands_Item">
                    <div>
                        <img src="https://cms-contents.pharmeasy.in/carousel_item/1466c422fcd-Sugerfree.png?dim=1440x0" alt="" />
                    </div>
                    <div>
                        Sugar Free
                    </div>
                </div>
                </Link>
                <Link to="/healthcare">
                <div className="Home_Featured_Brands_Item">
                    <div>
                        <img src="https://cms-contents.pharmeasy.in/carousel_item/a204783ad47-App-Evion.png?dim=1440x0" alt="" />
                    </div>
                    <div>
                        Evion
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export {Featured_Brands};
