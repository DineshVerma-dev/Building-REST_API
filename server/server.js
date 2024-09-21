import express from "express"
import connectDB from "./database/database.js"

const app = express()

const PORT = 9000
connectDB()

app.get("/",(req,res)=>{
    res.send("hello ")
    
})

import ProductRoute from './routes/Product.route.js'
app.use("/api/v1/product",ProductRoute)
app.listen(PORT,()=>{
 console.log(`server is running on http://localhost:${PORT}`)
})