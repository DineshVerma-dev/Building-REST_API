import express from "express"
import connectDB from "./database/database.js"
import cors from "cors"
const app = express()

const PORT = 9000
connectDB()

app.use(cors({credentials : true }))

app.use(express.json())
app.get("/", (req, res) => {
    res.send("hello ")

})

import UserRoute from './routes/Users.route.js'
app.use("/api/v1/user", UserRoute)



app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})