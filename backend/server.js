import dotenv from "dotenv";
dotenv.config();

import express from "express"
import cors from "cors"
import connectDB from './config/db.js';
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// import "dotenv/config";

const app =  express()
const port = 4000;


app.use(express.json())
app.use(cors())

// console.log("Stripe Secret Key in server.js:", process.env.STRIPE_SECRET_KEY);
connectDB();

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter) ;
app.use('/api/order', orderRouter);

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});

// mongodb+srv://gourangiacc2:159625@cluster0.klzxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0