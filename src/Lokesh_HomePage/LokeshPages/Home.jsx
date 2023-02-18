import { CarouselBox } from "../LokeshComponents/CarouselBox";
import { Home_First_Section } from "../LokeshComponents/Home_First_Section";
import { FaLock } from "react-icons/fa";
import { ShopByConcernComponents } from "../LokeshComponents/ShopByConcernComponents";
import { HomePage_Navbar } from "../LokeshComponents/HomePage_Navbar";
import { Home_unknown_section } from "../LokeshComponents/Home_unknown_section";
import { PreviouslyBrowsedItems } from "../LokeshComponents/PreviouslyBrowsedItems";
import { CarouselBox_second } from "../LokeshComponents/CarouselBox_second";
import { Image_box_first } from "../LokeshComponents/Image_box_first";
import { Image_box_second } from "../LokeshComponents/Image_box_second";
import { FrequentlyBookedLabTests } from "../LokeshComponents/FrequentlyBookedLabTests";
import { Wellness_Essentials_of_the_Week } from "../LokeshComponents/Wellness_Essentials_of_the_Week";
import { Featured_Brands } from "../LokeshComponents/Featured_Brands";
import { CarouselBox_Third } from "../LokeshComponents/CarouselBox_third";
import { Shop_by_Categories } from "../LokeshComponents/Shop_by_Categories";
import { Home_SinglePage_Element } from "../LokeshComponents/Home_SinglePage_Element";
import { Lokesh_Second_Data_Card_Element } from "../LokeshComponents/Lokesh_Second_Data_Card_Element";
import Home_Lab_Tests from "../LokeshComponents/Home_Lab_Tests";
import HomeDescription from "../LokeshComponents/Home_Description";
import Footer from "../../Ankita_Components/Footer/Footer";
import "./Home.css";
import "../LokeshComponents/Home_Styles/HomePage_Navbar.css";
import "../LokeshComponents/Home_Styles/CarouselBox_second.css";
import "../LokeshComponents/Home_Styles/CarouselBox_third.css";


const Home = () => {
    return (
        <div className="Lokesh-Home-Container">
            <HomePage_Navbar />

            <section className="lokesh_home_top_section">
                <Home_First_Section/>
            </section>

            <section className='lokesh_home_carousel'>
                <CarouselBox />
            </section>

            <section className="lokesh_home_first_section">
                <p>Offers Just for You</p>
                <div className="lokesh_home_first-section-grid">
                    <div>
                        <div>
                            <img src="https://cms-contents.pharmeasy.in/offer/c287851239f-25_off.jpg?dim=1440x0" alt="" />
                        </div>
                        <div>
                            Flat 25% off on first 3 medicine orders.
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="https://cms-contents.pharmeasy.in/offer/b1cafb3a0cf-flat_27_off.jpg?dim=1440x0" alt="" />
                        </div>
                        <div>
                            Flat 27% off + up to Rs.1000 surprise cashback.
                        </div>
                    </div>

                    <div>
                        <div>
                            <FaLock />
                        </div>
                        <div>
                            Log in to view more offers
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <PreviouslyBrowsedItems/>
            </section>

            <section className="Home_CarouselBox_second">
                <p>Payment Offers</p>
                <CarouselBox_second/>
            </section>

            <section>
                <Home_SinglePage_Element/>
            </section>

            <section className="Home_Lab_Tests_padding">
                <Home_Lab_Tests/>
            </section>

            <section className="lokesh_home_fourth_section">
                <div className="lokesh_home_fourth-section-Box-1">
                    <div className="Home_part-1">
                        <div>
                            <img src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0" alt="" />
                        </div>
                        <div>
                            <p>Order with Prescription</p>
                            <p>Upload prescription and we will deliver your medicines</p>
                            <button>Upload</button>
                        </div>
                    </div>
                    <div className="Home_part-2">
                        <div>
                            <p>How does this work?</p>
                        </div>
                        <div>
                            <p><span>1</span> Upload a photo of your prescription</p>
                            <p><span>2</span> Add delivery address and place the order</p>
                            <p><span>3</span> We will call you to confirm the medicines</p>
                            <p><span>4</span> Now, sit back! your medicines will get delivered at your doorstep</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Lokesh_Second_Data_Card_Element/>
            </section>

            <section>
                <Image_box_first/>
            </section>

            <section>
                <Shop_by_Categories/>
            </section>

            <section>
                <FrequentlyBookedLabTests/>
            </section>

            <section className="home_third_carousel_section">
                <p className="shop_by_category_carousel"></p>
                <CarouselBox_Third/>
            </section>

            <section className="ShopByConcern">
                <ShopByConcernComponents />
            </section>

            <section>
                <Wellness_Essentials_of_the_Week/>
            </section>

            <section>
                <Featured_Brands/>
            </section>

            <section>
                <Image_box_second/>
            </section>

            <section className="FrequentlyBookedLabTests"></section>

            <section className="home_unknown_section">
                <Home_unknown_section/>
            </section>
            <section>
                <HomeDescription/>
            </section>

            <section>
                <Footer/>
            </section>
        </div>

    );
}

export { Home };