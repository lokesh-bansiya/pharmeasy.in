import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./RtpcrTest.css";
import styles from "./RtpcrTest.module.css";

const RtpcrTest = () => {
  return (
    <Box>
      <Box className="rtpcrtest_div">
        <Box className="textname_test">Test Details</Box>
        <Box className="all_detail_Box">
          <Box className="box1">
            <Box className="covidrtpcr_div">
              <Box className="img_content">
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
                  alt="labs"
                />
                <Text className="rtpcr_text">
                  Covid-19 RTPCR (Coronavirus SARS - CoV2)
                </Text>
              </Box>
              <Text className="certifiedlab">Available at 1 certified lab</Text>
              <button className="sel_btn">Select</button>
            </Box>

            <Box className="warning_Box">
              {/* <Box className="imgwarn"><img src={img1} alt="" /></Box> */}
              <Text className="textwarn">
                The COVID-19 laboratory test can detect positive coronavirus
                cases. Any individual with symptoms like cough, high fever,
                shortness of breath, respiratory and breathing difficulties, and
                with a history of international travel or contact with Covid -19
                +ve
              </Text>
            </Box>

            <Box className="dis_req_div">
              <Box className="discription_div">
                Popular Tests
                <Box className="line1"></Box>
              </Box>

              <Box className="testrequi">Affordable Packages</Box>
            </Box>
            <Box className="disbox">
              The COVID-19 laboratory test can detect positive coronavirus
              cases. Any individual with symptoms like cough, high fever,
              shortness of breath, respiratory and breathing difficulties, and
              with a history of international travel or contact with Covid -19
              positive cases, can book this test with prior consultation by
              General Physician. The result of this test will be informed to the
              relevant authorities as mandated by the government. Home sample
              collection will be done by an expert technician.
            </Box>
          </Box>
          <Box className="box1">
            <Box className="selectyou">Please select a test to proceed</Box>
            <Box className="view_box">
              <button className="view_cart">View Cart</button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Services/> */}
      <div className="appdiv">
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
    </Box>
  );
};
export default RtpcrTest;
