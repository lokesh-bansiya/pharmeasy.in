const express = require("express");
const jwt = require("jsonwebtoken");
const ProductRoute = express.Router();
const { ProductModel } = require("../models/product.model");

ProductRoute.get("/", async (req, res) => {
  const AllUsers = await ProductModel.find();
  res.send(AllUsers);
});

ProductRoute.post("/", async (req, res) => {
  const NewProduct = new ProductModel(req.body);
  await NewProduct.save();
  res.send({ msg: "product added sucessfully" });
});

ProductRoute.patch("/:ID", async (req, res) => {
  const { ID } = req.params;
 y;

  ProductModel.findByIdAndUpdate(
    ID,
   req.body,
    function (err, docs) {
      if (err) {
        res.send({ msg: "Error in Updating file" });
      } else {
        res.send({ msg: "Product Updated Successfull sucessfull" });
      }
    }
  );
});

ProductRoute.delete("/:ID", async (req, res) => {
  const { ID } = req.params;

  ProductModel.findByIdAndDelete(ID, function (err, docs) {
    if (err) {
      res.send({ msg: "Error in Deleting file" });
    } else {
      res.send({ msg: "Product Deleted Successfull sucessfull" });
    }
  });
});

module.exports = { ProductRoute };
