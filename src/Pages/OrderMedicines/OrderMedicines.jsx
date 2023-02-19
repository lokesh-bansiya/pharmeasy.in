import styles from "./OrderMedicines.module.css";
import { Heading } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Select from "react-select";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const options = [
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    v2: "Ayurvedic Care",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },
  {
    value: "Evion 400mg Strip of 10 Capsules",
    v2: "Health Food and Drinks",
    label: "Evion 400mg Strip of 10 Capsules",
  },
  {
    value: "Pan 40mg Strip of 15 Tablets",
    v2: "Home Care",
    label: "Pan 40mg Strip of 15 Tablets",
  },
  {
    value: "Pharmeasy Multivitamin",
    v2: "Beauty",
    label: "Pharmeasy Multivitamin",
  },
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    v2: "Sexual Wellness",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },
  {
    value: "Pharmeasy Multivitamin",
    v2: "Personal Care",
    label: "Pharmeasy Multivitamin",
  },
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    v2: "Skin Care",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },
  {
    value: "Evion 400mg Strip of 10 Capsules",
    v2: "Fitness & Supplements",
    label: "Evion 400mg Strip of 10 Capsules",
  },
  {
    value: "Pan 40mg Strip of 15 Tablets",
    v2: "Home Care",
    label: "Pan 40mg Strip of 15 Tablets",
  },
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2rem",
        background: "none",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        background: "none",
        color: "black",
        height: "2rem",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}

const OrderMedicines = () => {
  const [val, setVal] = useState("");
  const navigate = useNavigate();

  var details = val.value;
  var details2 = val.v2;

  if (val.value) {
    localStorage.setItem("frequently", JSON.stringify(details2));
    navigate(`/productdetails/${details}`);
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <div className={styles.maindiv}>
        <div className={styles.top_1}>
          <p>Home {">"} Order Medicines Online</p>
        </div>
        <div className={styles.order_div}>
          <div className={styles.left_div}>
            <div>
              <Heading as="h1" fontSize="30px" noOfLines={1}>
                Order Medicines Online
              </Heading>
              <div className={styles.left_div2}>
                <div>
                  <div className={styles.flex_1}>
                    <p>Flat 15% Off</p>
                    <p>1 Lakh+ Products</p>
                    <p>Easy Returns</p>
                  </div>
                  <Heading style={{ color: "white" }} as="h4" size="md">
                    Search for Medicines / Healthcare Products
                  </Heading>
                </div>
                <div className={styles.select}>
                  <input type="text" placeholder="Select Pincode" />
                  <Select
                    onChange={(values) => setVal(values)}
                    placeholder="Search medicines/Healthcare products"
                    svg=""
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right_div}>
            {/* <div>
              <img
                className={styles.imgicon}
                src="https://cdn.iconscout.com/icon/free/png-256/prescription-1690639-1434867.png"
                alt=""
              />
              <p>Order via Prescription</p>
            </div> */}
            <div>
              <img
                className={styles.imgicon2}
                src="https://thumbs.dreamstime.com/b/no-stop-prescription-rx-recipe-icon-medicine-drugs-pills-sign-prohibited-ban-stop-symbol-no-prescription-drugs-icon-vector-153329369.jpg"
                alt=""
              />
              <p>Don't have a Prescription?</p>
            </div>
          </div>
        </div>
        <div className={styles.slider_1}>
          <Heading as="h4" size="md">
            All Offers
          </Heading>
          <Slider {...settings}>
            <div className={styles.slider_1_div}>
              <div className={styles.slider_1_div_flex}>
                <img
                  className={styles.slider_img}
                  src="https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?w=64&q=75"
                />
                <p>
                  Get FLAT rs.1000 OFF on booking <br />
                  Code: GRAND1000
                </p>
              </div>
            </div>
            <div className={styles.slider_1_div}>
              <div className={styles.slider_1_div_flex}>
                <img
                  className={styles.slider_img}
                  src="https://cms-contents.pharmeasy.in/offer/6b979e67782-Diagnostics-02-min.png?w=64&q=75"
                />
                <p>
                  Get FLAT rs.1000 OFF on booking <br />
                  Code: GRAND1000
                </p>
              </div>
            </div>
            <div className={styles.slider_1_div}>
              <div className={styles.slider_1_div_flex}>
                <img
                  className={styles.slider_img}
                  src="https://cms-contents.pharmeasy.in/offer/8cdf65ac110-mobiwiklogo.png?w=64&q=75"
                />
                <p>
                  Get up to 500Rs caseback <br />
                  vio Mobikwink
                  <br />
                  Code: Not Required
                </p>
              </div>
            </div>
            <div className={styles.slider_1_div}>
              <div className={styles.slider_1_div_flex}>
                <img
                  className={styles.slider_img}
                  src="https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?w=64&q=75"
                />
                <p>
                  Get FLAT rs.1000 OFF on booking <br />
                  Code: GRAND1000
                </p>
              </div>
            </div>
            <div className={styles.slider_1_div}>
              <div className={styles.slider_1_div_flex}>
                <img
                  className={styles.slider_img}
                  src="https://cms-contents.pharmeasy.in/offer/2846076d5d2-Diagnostics-10-min.png?w=64&q=75"
                />
                <p>
                  Order medicines and get <br /> FLAT 400 OFF
                  <br />
                  Code: CARE4U
                </p>
              </div>
            </div>
            <div className={styles.slider_1_div}>
              <div className={styles.slider_1_div_flex}>
                <img
                  className={styles.slider_img}
                  src="https://cms-contents.pharmeasy.in/offer/6b979e67782-Diagnostics-02-min.png?w=64&q=75"
                />
                <p>
                  Get FLAT RS.300 OFF on PharmEasy
                  <br />
                  Code: CSHB200
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.slider_2}>
          <Slider {...settings1}>
            <div className={styles.slider_2_div}>
              <img src="https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg" />
            </div>
            <div className={styles.slider_2_div}>
              <img src="https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg" />
            </div>
            <div className={styles.slider_2_div}>
              <img src="https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg" />
            </div>
            <div className={styles.slider_2_div}>
              <img src="https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg" />
            </div>
            <div className={styles.slider_2_div}>
              <img
                c
                src="https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg"
              />
            </div>
            <div className={styles.slider_2_div}>
              <img src="https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg" />
            </div>
          </Slider>
        </div>
        <div className={styles.slider_3}></div>

        <div className={styles.desc}>
          <div>
            <Heading s as="h4" size="md">
              India's No. 1 Medicine Delivery App
            </Heading>
            <p>
              The concept of medicine home delivery has been taken to a new
              level by the PharmEasy online medicine delivery app. You can use
              the PharmEasy online medicine delivery app to browse through an
              extensive range of medicines. Each medicine undergoes a 3-step
              quality check. Whatever be your medicine requirement, you are sure
              to locate it in this online pharmacy. All you have to do then is
              to add it to your cart and place the order and get your order
              delivered quickly. India’s beloved online medicine delivery app
              makes sure that you get your
              <br /> medicines in record time because we know how vital time is
              in any treatment. Sit back, and we will have all your medical
              necessities delivered to your doorstep.
            </p>
          </div>
          <div>
            <Heading s as="h4" size="md">
              Online Medicine - Your Online Medical Store in India
            </Heading>
            <p>
              Tired of walking all the way to your local medicine store? <br />
              Worried that going out is risky during the current times? Order
              medicines online at PharmEasy, India’s trusted online medicine
              app. With more than 1 lakh medicines always in stock, you are sure
              to find what you are looking for, and that too at affordable
              prices!
            </p>
          </div>
          <div>
            <Heading s as="h4" size="md">
              Reasons To Buy Medicine Online From PharmEasy
            </Heading>
            <p>
              Here are a few reasons that will convince you to give online
              medicine order through the PharmEasy app -
            </p>
            <li>1,200+ cities and 20,000+ Pin codes served</li>
            <li>Express Delivery</li>
            <li>1 Lakh+ medicines available</li>
            <li>Cash on delivery option available</li>
            <li>Attractive offers</li>
            <li>Cashback option through wallet</li>
            <li>Stringent quality checks</li>
            <li>
              Garnered the trust of more than 10 million users who have made an
              online purchase through PharmEasy
            </li>
          </div>
          <div>
            <Heading s as="h4" size="md">
              Get 3-Step Quality-checked Medicines
            </Heading>
            <p>
              PharmEasy is a one-stop-shop for all your healthcare needs. We
              have 1L+ products for you to choose from. Buy medicines online at
              affordable prices from the comforts of your home in just a few
              clicks and get them delivered at your doorstep.The en tire process
              of shopping for medicines is hassle-free and convenient. All you
              have to do is search for the products you need on our website or
              app, add to cart and then proceed with the checkout process.With
              our scheduled refill reminder, you don’t even need to keep track
              of your refill dates. What’s more, we have great offers, with
              added discounts and massive e-wallet cashbacks on purchasing
              medicines!
            </p>
          </div>
        </div>
        <div className={styles.faq}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem padding="10px">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading s as="h3" size="md">
                      Is buying medicines online safe?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Absolutely! All our medicines undergo a three-step quality check
                process to ensure they are of high quality. We source our
                products only from licensed retail pharmacies. PharmEasy is used
                by 5M+ users across 1.2k+ cities in India incl. Bangalore,
                Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon, Noida, Pune, etc.
                for purchasing medicines online.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem padding="10px">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading s as="h3" size="md">
                      {" "}
                      Why choose us for your medicine gome delivery?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li>Used by 5M+ customers</li>
                <li>Delivery in 24-48* hours</li>
                <li>
                  Over 1L+ meds and healthcare products for you to select from
                </li>
                <li>3-step quality-checked products</li>
                <li>PharmEasy Plus subscription with exclusive benefits</li>
                <li>We deliver in 22k+ pin codes across 1.2k+ cities</li>
                <li>Scheduled refill reminders</li>
                <li>Attractive deals and e-wallet cashbacks</li>
                <li>
                  A highly capable team of experienced pharmacists and
                  healthcare professionals
                </li>
                <li>Cash-on-delivery available</li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem padding="10px">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading s as="h3" size="md">
                      How do I order medicine home delivery
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li>
                  Visit our website or open our online medicine app on your
                  phone.
                </li>
                <li>
                  Upload a valid doctor’s prescription and search from our list
                  of medicines.
                </li>
                <li>
                  Enter the address where you want your package to be delivered.
                </li>
                <li>
                  Our partner retailer will call you to confirm the order.
                </li>
                <li>The medicine is packed by the pharmacist.</li>
                <li>
                  Our delivery person will deliver the package at your doorstep.
                </li>
                <p>
                  You can use our app or visit the website to track your
                  package.
                </p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="10px">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading s as="h3" size="md">
                      When will PharmEasy deliver my medicines?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once you purchase your medicines online with us, you will get it
                within 24-48* hours.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem padding="10px">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading s as="h3" size="md">
                      When will I receive my order?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Your order will be delivered as per the 'Estimated Delivery
                Date' committed at the time of order placement. You can check
                this by selecting your order from the "My Orders" section. Keep
                a lookout for our order delivery updates. Note: Due to the
                current COVID-19 crisis, the delivery date may not be as per
                usual timelines and we request you to bear with us. But rest
                assured, we are working round the
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem padding="10px">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading s as="h3" size="md">
                      Is buying medicines online safe?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Absolutely! All our medicines undergo a three-step quality check
                process to ensure they are of high quality. We source our
                products only from licensed retail pharmacies. PharmEasy is used
                by 5M+ users across 1.2k+ cities in India incl. Bangalore,
                Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon, Noida, Pune, etc.
                for purchasing medicines online.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem padding="10px">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading s as="h3" size="md">
                      What is the shelf life of medicines being provided?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We ensure that the shelf life of the medicines being supplied by
                our partner retailers is a minimum of 3 months from the date of
                delivery.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className={styles.bottom_1}>
          <div>
            <img
              className={styles.bottom_1_img1}
              src="https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/25/e3/46/25e346ae-5ef1-7160-ce1b-b026792dae2d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp"
              alt=""
            />
            <Heading as="h4" size="md">
              1 Lakh+Products
            </Heading>
            <p>
              We maintain strict quality <br />
              controls on all our partner retailers,
              <br />
              so that you always get standard <br />
              quality products.
            </p>
          </div>
          <div>
            <img
              className={styles.bottom_1_img}
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZTLyoLYiQZNQ0yg_oYch7AEptx8Xi2YCG0F03_mVIWomqypwq"
              alt=""
            />
            <Heading as="h4" size="md">
              Secure Payment
            </Heading>
            <p>
              100% secure and trusted <br />
              payment protection
            </p>
          </div>
          <div>
            <img
              className={styles.bottom_1_img}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVaypOjjhUQzWBVQiYwSwhMn1QrUmGJ58I0bLJ6xTgLQMvflW"
              alt=""
            />
            <Heading as="h4" size="md">
              Easy Return
            </Heading>
            <p>
              We have a new and dynamic return window <br />
              policy for medicines and healthcare items. <br />
              Refer FAQs section for more details.
            </p>
          </div>
        </div>
        <div className={styles.bottom_2}>
          <div className={styles.bottom_21}>
            <img
              src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"
              alt=""
            />
          </div>
          <div className={styles.bottom_22}>
            <p>Download the App for Free</p>
            <div>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/apple-store-icon.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/android-store-icon.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMedicines;
