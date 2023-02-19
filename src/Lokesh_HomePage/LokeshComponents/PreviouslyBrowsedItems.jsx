import { Link } from "react-router-dom";
import "./Home_Styles/PreviouslyBrowsedItems.css";

const PreviouslyBrowsedItems = () => {
    return (
        <div>
            <p className="Home_PreviouslyBrowsedItems-p">Previously Browsed Items</p>
            <div className="Home_PreviouslyBrowsedItems">
                <div className="Home_PreviouslyBrowsedItems_Item">
                    <Link to="/product">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/products_otc/I47396/kabibite-mango-diskettes-jar-of-250-g-2-1655290831.jpg?dim=1440x0" alt="" />
                        </div>
                    </Link>

                    <div>
                        <p>Kabibite Mango Diskettes Jar Of 250 G</p>
                        <p>MRP <span>₹369.00</span></p>
                        <p>₹284.13 <span>23% OFF</span></p>
                    </div>
                </div>

                <div className="Home_PreviouslyBrowsedItems_Item">
                    <Link to="/product">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/products_otc/P45095/pharmeasy-biotin-gummies-pack-of-60-2-1666783958.jpg?dim=1440x0" alt="" />
                        </div>
                    </Link>
                    <div>
                        <p>Pharmeasy Biotin Gummies - Pack Of 60</p>
                        <p>MRP <span>₹1499.00</span></p>
                        <p>₹749.50 <span>50% OFF</span></p>
                    </div>
                </div>

                <div className="Home_PreviouslyBrowsedItems_Item">
                    <Link to="/product">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/products_otc/U09552/nyumi-happy-hair-gummies-lush-strawberry-flavour-50-gummies-2-1641792173.jpg" alt="" />
                        </div>
                    </Link>
                    <div>
                        <p>Nyumi Happy Hair Gummies, Lush Strawberry Flavour - 50 Gummies</p>
                        <p>MRP <span>₹990</span></p>
                        <p>₹693 <span>30% OFF</span></p>
                    </div>
                </div>

                <div className="Home_PreviouslyBrowsedItems_Item">
                    <Link to="/product">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/products_otc/T18833/everherb-by-pharmeasy-amla-immunity-booster-capsules-natural-vitamin-c-bottle-of-60-2-1661863079.jpg" alt="" />
                        </div>
                    </Link>
                    <div>
                        <p>Everherb (by Pharmeasy) Amla - Immunity Booster Capsules</p>
                        <p>MRP <span>₹599</span></p>
                        <p>₹251.58 <span>58% OFF</span></p>
                    </div>
                </div>

                <div className="Home_PreviouslyBrowsedItems_Item">
                    <Link to="/product">
                        <div>
                            <img src="https://cdn01.pharmeasy.in/dam/products_otc/K99156/saffola-fittify-whey-protein-peanut-butter-dark-chocolaty-extra-crunchy-200g-jar-2-1647515654.jpg" alt="" />
                        </div>
                    </Link>
                    <div>
                        <p>Saffola Fittify Whey Protein Peanut Butter Dark...</p>
                        <p>MRP <span>₹199</span></p>
                        <p>₹149.25 <span>25% OFF</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { PreviouslyBrowsedItems };
