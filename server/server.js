import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//App config
const app = express();
app.use(cors());
app.use(express.json());
console.log('hi');
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://Amar:ZOG2tNpCoFKLVej5@cluster0.osup3.mongodb.net/Obdaniste-db?retryWrites=true&w=majority`




// DB config
mongoose.connect(connection_url);

//API Endpoints
app.get('/', (req,res) => res.status(200).send("Obdaniste Radost"));

/*
app.post("/login",(req,res)=>{ 
    
});*/


//listener
app.listen(port, () => console.log(`Server radi na: ${port}`));