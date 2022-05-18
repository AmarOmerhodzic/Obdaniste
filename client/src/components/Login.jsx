import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Login = () => {

 // const {email, setEmail} = useState("");
 // const {password, setPassword} = useState("");

 /* const login = () => {
    axios.post("http://localhost:3000/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };
*/

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-4 fw-bolder">Dobrodošli</h1>
            <p className="lead text-center">Unesite svoje podatke za prijavu</p>
            <h5 className="mb-4">ili se</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Registrujte
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">PRIJAVA</h1>
            <form>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email adresa</label>
                <input type="email" 
               // onChange={(e) => {
               //   setEmail(e.target.value);
               // }}
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">Ne dijelite svoj email.</div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Šifra</label>
                <input type="password" 
               // onChange={(e) => {
               //   setPassword(e.target.value);
                //}}
                class="form-control" 
                id="exampleInputPassword1" />
              </div>

              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Čekiraj</label>
              </div>
              <button type="submit" 
             // onClick={login}
              class="btn btn-primary">Potvrda</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;