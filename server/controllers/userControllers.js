const UserModel = require('../models/Users')
const asyncHandler = require('express-async-handler');
const generateToken = require('../utilis/generateToken');
//const { use } = require('../routes/userRoutes');
const registerUser = asyncHandler(async (req,res) => {
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
});
const authUser = asyncHandler(async (req,res) => {
    const {email,password}=req.body;
    const user = await UserModel.findOne({email});
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            ime: user.ime,
            prezime: user.prezime,
            imeRoditelja: user.imeRoditelja,
            datumRodjenjaDjeteta: user.datumRodjenjaDjeteta,
            brojTelefona: user.brojTelefona,
            roditeljiZaposleni: user.roditeljiZaposleni,
            adresaStanovanja: user.adresaStanovanja,
            gradStanovanja: user.gradStanovanja,
            dijeteBezRoditelja: user.dijeteBezRoditelja,
            samohraniILIrazvedeni: user.samohraniILIrazvedeni,
            rom: user.rom, //ne mogu se ne smijati na user.rom
            bitneNapomene: user.bitneNapomene,
            email: user.email,
            token:generateToken(user._id),
        })
    }else {
        res.status(400);
        throw new Error('Pogresan Email ili password!')
    }
});


module.exports={registerUser,authUser}