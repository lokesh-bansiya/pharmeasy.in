const express = require("express");
const { LoginRoute } = require("./routes/login.route");
const { SignupRoute } = require("./routes/singup.route");
const { ProductRoute } = require("./routes/product.route");

const app = express();
const port = 8080;
const cors = require("cors");
const { dbconnection } = require("./config/db");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/login", LoginRoute);
app.use("/signup", SignupRoute);
app.use("/products", ProductRoute);
app.get("/", (req, res) => res.send("Home Route"));

app.listen(port, async () => {
  try {
    dbconnection;
    console.log({ msg: "connected to database" });
  } catch (err) {
    console.log(err);
  }
  console.log(`app listening to port ${port}!`);
});
