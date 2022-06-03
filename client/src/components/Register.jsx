import React, { useState,useEffect } from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";
const Register = ({history}) => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [imeRoditelja, setImeRoditelja] = useState("");
  const [datumRodjenjaDjeteta, setDatumRodjenjaDjeteta] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [brojTelefona, setBrojTelefona] = useState("");
  const [roditeljiZaposleni, setRoditeljiZaposleni] = useState(true);
  const [adresaStanovanja, setAdresaStanovanja] = useState("");
  const [gradStanovanja, setGradStanovanja] = useState("");
  const [dijeteBezRoditelja, setDijeteBezRoditelja] = useState(false);
  const [samohraniILIrazvedeni, setSamohraniILIrazvedeni] = useState("");
  const [rom, setRom] = useState(true);
  const [bitneNapomene, setBitneNapomene] = useState("");
  const [currentUser,setCurrrentUser] = useState(undefined);
  const [isLoaded,setIsLoaded] = useState(false);
  useEffect(() => {
  const checkData = async () =>{
    if(!localStorage.getItem('userInfo')){
      navigate('/login')
  }else{
    setCurrrentUser(await JSON.parse(localStorage.getItem("userInfo")))
    setIsLoaded(true)
  }
}
checkData();
   },[])
  const navigate = useNavigate();

  const createUser = async(event) => {
    event.preventDefault();
    console.log("hi");
    const { data }  = await Axios.post("http://localhost:8001/createUser", {
      ime: ime,
      prezime: prezime,
      imeRoditelja: imeRoditelja,
      datumRodjenjaDjeteta: datumRodjenjaDjeteta,
      email: email,
      password: password,
      brojTelefona: brojTelefona,
      roditeljiZaposleni: roditeljiZaposleni,
      adresaStanovanja: adresaStanovanja,
      gradStanovanja: gradStanovanja,
      dijeteBezRoditelja: dijeteBezRoditelja,
      samohraniILIrazvedeni: samohraniILIrazvedeni,
      rom: rom,
      bitneNapomene: bitneNapomene,
    
    });
    localStorage.setItem('userInfo', JSON.stringify(data))
    console.log(data)
    navigate('/loggedin');
  };

  return (
    <form style={{ padding: "4%", backgroundColor: "#cce1ff", color: "black" }}>
      <div class="form-group">
        <label>Ime</label>
        <input
          class="form-control"
          placeholder="Ime"
          onChange={(event) => {
            setIme(event.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label>Prezime</label>
        <input
          class="form-control"
          placeholder="Prezime"
          onChange={(event) => {
            setPrezime(event.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label>Ime Roditelja</label>
        <input
          class="form-control"
          placeholder="Ime Roditelja"
          onChange={(event) => {
            setImeRoditelja(event.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label>Datum rodjenja djeteta</label>
        <input
          class="form-control"
          placeholder="npr. dd/mm/gggg"
          onChange={(event) => {
            setDatumRodjenjaDjeteta(event.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label>E-mail</label>
        <input
          class="form-control"
          placeholder="E-mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          class="form-control"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label>Broj telefona</label>
        <input
          type="ime"
          class="form-control"
          placeholder="Broj telefona"
          onChange={(event) => {
            setBrojTelefona(event.target.value);
          }}
        />
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="roditeljiZaposleni"
          onChange={(event) => {
            setRoditeljiZaposleni(event.target.value);
          }}
        />
        <label class="form-check-label">Roditelji zaposleni?</label>
      </div>
      <div class="form-group">
        <label>Adresa stanovanja</label>
        <input
          type="ime"
          class="form-control"
          placeholder="Adresa stanovanja"
          onChange={(event) => {
            setAdresaStanovanja(event.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label>Grad stanovanja</label>
        <input
          class="form-control"
          placeholder="Grad stanovanja"
          onChange={(event) => {
            setGradStanovanja(event.target.value);
          }}
        />
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="roditeljiZaposleni"
          onChange={(event) => {
            setDijeteBezRoditelja(event.target.value);
          }}
        />
        <label class="form-check-label" for="defaultCheck1">
          Dijete bez roditelja?
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="rom"
          onChange={(event) => {
            setRom(event.target.value);
          }}
        />

        <label class="form-check-label" for="defaultCheck1">
          Rom?
        </label>
      </div>
      <div class="form-group">
        <label>Samohrani ili razvedeni roditelji?</label>
        <input
          class="form-control"
          placeholder="Samohrani/Razvedeni"
          onChange={(event) => {
            setSamohraniILIrazvedeni(event.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Bitne napomene</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(event) => {
            setBitneNapomene(event.target.value);
          }}
        ></textarea>
      </div>
      <button class="btn btn-primary" onClick={createUser}>
        {" "}
        Registrujte se{" "}
      </button>
    </form>
  );
};
export default Register;
