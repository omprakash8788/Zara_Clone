const express = require("express")
const app = express()
var cors = require('cors');
app.use(cors());
// const cors = require("cors");
// app.use(cors())
require("dotenv").config();
const bodyParser = require("body-parser");
const { default: Stripe } = require("stripe");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const port = process.env.PORT;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)




app.get("/", (req, res)=>{
    res.send("Hello bhai")
})

// create a router 
app.post("/pay", async(req, res)=>{
    console.log(req.body.token)
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd", 
    })
})

app.listen(port, ()=>{
    console.log(`Server is running on  Port ${port}`);
})