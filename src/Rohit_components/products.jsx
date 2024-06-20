import Card from "./card";
import "./products.css";
import { useState, useEffect } from "react";
import {
  Select,
  Text,
  Option,
  Checkbox,
  Box,
  filter,
  Button,
  Stack,
  Radio,
  RadioGroup,
  Flex,
} from "@chakra-ui/react";

const Products = ({ data }) => {
  const [productdata, setproductdata] = useState(data);
  const [max, setmax] = useState(1000);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, [productdata]);

  const sortData = (e) => {
    let value = e.target.value;

    if (value == "ascending") {
      let map = [...productdata];
      let updateddata = map.sort((a, b) => {
        return a.mrp - b.mrp;
      });
      setproductdata([...updateddata]);
    } else if (value == "decending") {
      let map = [...productdata];
      let updateddata = map.sort((a, b) => {
        return b.mrp - a.mrp;
      });
      setproductdata([...updateddata]);
    } else {
      setproductdata(data);
    }
  };

  const FilterData = (e) => {
    if (e.target.value == "clear") {
      setmax(1000);
      setproductdata(data);
      return;
    }

    if (e.target.checked) {
      let temp = [...data];
      let [first, second] = e.target.value.split(",").map(Number);

      let filteredData = temp.filter((ele) => Number(ele.mrp) < second);

      setproductdata(filteredData);
      setmax(second);
    }
  };

  return (
    <div className="conatainerForProductPage">
      <section>
        <div>
          <div id="filterbox">
            <Text mt={2} pr="4">
              Sort by:
            </Text>{" "}
            <Select w="auto" onChange={sortData}>
              <option value="popularity">Popularity</option>
              <option value="ascending">Price low to high</option>
              <option value="decending">Price high to low</option>
            </Select>
          </div>
        </div>
        <div>
          <Text fontSize="xl" mt="5%">
            Filter product by price
          </Text>
          <Button mt="6" value="clear" onClick={FilterData}>
            Clear filter
          </Button>
        </div>

        <div
          style={{
            display: "grid",
            marginTop: "10%",
            gap: "8%",
          }}
        >
          <Checkbox
            isChecked={max == 100}
            onChange={FilterData}
            value={[0, 100]}
          >
            Below 100
          </Checkbox>
          <hr />
          <Checkbox
            isChecked={max == 200}
            mt="2px"
            onChange={FilterData}
            value={[0, 200]}
          >
            Below 200
          </Checkbox>
          <hr />

          <Checkbox
            isChecked={max == 400}
            mt="2px"
            onChange={FilterData}
            value={[0, 400]}
          >
            Below 400
          </Checkbox>
          <hr />

          <Checkbox
            isChecked={max == 600}
            mt="2px"
            onChange={FilterData}
            value={[0, 600]}
          >
            Below 600
          </Checkbox>
          <hr />

          <Checkbox
            isChecked={max == 800}
            mt="2px"
            onChange={FilterData}
            value={[0, 800]}
          >
            Below 800
          </Checkbox>
          <hr />
        </div>
      </section>

      <section>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              padding: "0% 8% 4% 1%",
            }}
          >
            <Text fontWeight="bold" fontSize="4xl" color="gray.600">
              Health care
            </Text>
          </div>

          <div id="products-parent-div">
            {productdata != [] &&
              productdata.map((ele, index) => {
                return <Card key={index} ele={ele} />;
              })}{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
