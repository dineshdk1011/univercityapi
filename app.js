const express = require("express")
// const morgan = require("morgan")
const dotenv = require("dotenv").config()
const cors = require("cors")
const path = require("path")
const port = process.env.PORT || 5000
var app = express()

app.set("view engine", "ejs")

const mongoDB = require("./database/mongodb")

//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(morgan("dev"))

app.use("/download", express.static(path.join(__dirname + "/download")))
//cors config
app.use(cors())

//Router
app.use("/student", require("./router/student"))
app.use("/empolyee", require("./router/empolyee"))
app.use("/hostel", require("./router/hostel"))
app.use("/transport", require("./router/transport"))
app.use("/image", require("./router/Image"))
app.use("/video", require("./router/video"))
app.use("/user", require("./router/user"))
app.use("/timetable", require("./router/timetable"))
app.use("/course", require("./router/course"))
app.use("/department", require("./router/department"))
app.use("/division", require("./router/division"))
app.use("/institute", require("./router/institute"))
app.use("/campus", require("./router/campus"))
app.use("/fees", require("./router/Fees"))
app.use("/assessment", require("./router/assessment"))
app.use("/attendance", require("./router/attendance"))
app.use("/notes", require("./router/notes"))
app.use("/assessmentresult", require("./router/assessmentresult"))

//server init
app.listen(port, () => { console.log(`Api Running on http://localhost:${port}`) })