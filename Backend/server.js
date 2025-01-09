const { config } = require('dotenv')
config()
const express = require('express')
const cors = require('cors')
const corsOptions={
    origin:true,
    credentials:true
}
const Cookieparser = require('cookie-parser')
const app = express()
app.use(cors(corsOptions))
let mongoose = require('mongoose')
let mongodb = require('./Config/db')
mongoose.Promise = global.Promise
mongoose.connect(mongodb.db).then(() => {
    console.log("Database connected succesfull")
},
    error => {
        console.log("DB error" + error)
    }

)
app.use(Cookieparser())
app.use(express.json());
const authRoute = require("./Route/auth.routes")

app.use("/api/v1/auth", authRoute)
const AddShowRoute = require("./Route/AddShows.routes")

app.use("/api/v1/show", AddShowRoute)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log("Listning on part :" + port)
})