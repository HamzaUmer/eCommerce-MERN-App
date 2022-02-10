const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const userRoute = require('./routers/user');
const authRoute = require('./routers/auth');
const productRoute = require('./routers/product');
const cartRoute = require('./routers/cart');
const orderRoute = require('./routers/order');
const cors = require('cors');
const stripeRoute = require('./routers/stripe');

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DataBase Connected Successfully")
    ).catch((err)=> {
        console.log(err);
    });
app.use(cors());
app.use(express.json());
app.use(authRoute);
app.use(userRoute);
app.use(productRoute);
app.use(cartRoute);
app.use(orderRoute);
app.use(stripeRoute);
//3: Step Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req,res)=> {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is Running");
});


