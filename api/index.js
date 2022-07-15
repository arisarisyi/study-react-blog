const express = require("express");
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("../api/routes/auth")
const userRoute = require("../api/routes/users")
const postRoute = require("../api/routes/posts")
const catRoute = require("../api/routes/categories")
const multer = require("multer")

dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(console.log("connect mongoDB")).catch(error => console.log(error))

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "images")
  }, filename(request, file, cb) {
    cb(null, request.body.name)
  }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (request, response) => {
  response.status(200).json("File has been uploaded")
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", catRoute)

app.listen("5000", () => {
  console.log("Backend running")
})