import express from "express";
import mongoose from "mongoose";

//App config
const app = express();
console.log('hi');
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://Amar:ZOG2tNpCoFKLVej5@cluster0.osup3.mongodb.net/Obdaniste-db?retryWrites=true&w=majority`


//Midlewares

// DB config
mongoose.connect(connection_url);

//API Endpoints
app.get('/', (req,res) => res.status(200).send("Obdaniste Radost"));


//listener
app.listen(port, () => console.log(`Server radi na: ${port}`));