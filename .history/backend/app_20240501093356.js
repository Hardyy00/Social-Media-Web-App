const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes");
const userRoutes = require("./Routes/userRoutes");
const postRoutes = require("./Routes/postRoutes");
const cors = require("cors");
const path = require("path");
const uploadRoutes = require("./Routes/uploadRoutes");
const Razorpay = require("razorpay");

dotenv.config();
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

mongoose
  .connect("mongodb://127.0.0.1:27017/social-media-app")
  .then(() => {
    console.log("DB Connected");

    app.listen(process.env.PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Server connected");
      }
    });
  })
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "public")));

app.use("/images", express.static("images"));

app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/upload", uploadRoutes);

app.get("/api/getKey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

app.route("/api/pay").post(async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  res.status(200).json({ success: true, order });
});

app.route("/api/verifyPayment").post((req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);

  const signature = hmac.digest("hex");

  const isAuthentic = signature === razorpay_signature;
  if (isAuthentic) {
    return res.status(200).json({ success: true });
  } else {
    res.status(402).json({ success: false, message: "Payment Failed" });
  }
});
