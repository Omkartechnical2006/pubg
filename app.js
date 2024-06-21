// we have to show a messages like waho user recieved this or this 
const express = require("express");
const app = express();
const dotenv = require('dotenv');
const path = require("path");
// const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);
dotenv.config();

// connect to mongoose 
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/pubglegend');
}
// main().then(() => {
//     console.log("connected to DB");
// }).catch(err => { console.log(err) });

app.get("/",(req,res)=>{
    res.render("listings/home.ejs")
});
app.get("/admin",(req,res)=>{
    res.render("listings/admin.ejs");
})
app.get("/contact",(req,res)=>{
    res.render("listings/contact.ejs");
});
app.get("/track",(req,res)=>{
    res.render("listings/track.ejs");
});
app.get("/FAQ",(req,res)=>{
    res.render("listings/faq.ejs");
})
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})