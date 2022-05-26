const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users.js");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
//App config
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
console.log("hi");
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://Amar:ZOG2tNpCoFKLVej5@cluster0.osup3.mongodb.net/Obdaniste-db?retryWrites=true&w=majority`;

// DB config
mongoose.connect(connection_url);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
//API Endpoints

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

//Probao sam i get i post rade u thunderu/postman
/*app.get('/login', (req,res) => {
     UserModel.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});*/
//app.use('/api/users',userRoutes);

/*app.post("/register", async(req,res) => { 
    let user = await UserModel.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('Korisnik vec postoji!');
    } else {
        // Pvi dio da provjeri da li vec postoji korisnik
        // Ovaj dio je za unos novog 
        user = req.body
        user = new UserModel(user);
        await user.save();
        res.send(user);
    }
});*/

//listener
app.listen(port, () => console.log(`Server radi na: ${port}`));
