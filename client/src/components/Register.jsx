import React from "react";

const Register = () => {
  return (
    <form style={{ padding: "4%", backgroundColor: "#cce1ff", color: "black" }}>
      <div class="form-group">
        <label for="exampleFormControlInput1">Ime</label>
        <input type="ime" class="form-control" placeholder="Ime" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Prezime</label>
        <input type="ime" class="form-control" placeholder="Prezime" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Ime Roditelja</label>
        <input type="ime" class="form-control" placeholder="Ime Roditelja" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Datum rodjenja djeteta</label>
        <input type="ime" class="form-control" placeholder="npr. dd/mm/gggg" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">E-mail</label>
        <input type="ime" class="form-control" placeholder="E-mail" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Password</label>
        <input type="ime" class="form-control" placeholder="Password" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Broj telefona</label>
        <input type="ime" class="form-control" placeholder="Broj telefona" />
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="roditeljiZaposleni"
        />
        <label class="form-check-label" for="defaultCheck1">
          Roditelji zaposleni?
        </label>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Adresa stanovanja</label>
        <input
          type="ime"
          class="form-control"
          placeholder="Adresa stanovanja"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Grad stanovanja</label>
        <input type="ime" class="form-control" placeholder="Grad stanovanja" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Broj telefona</label>
        <input type="ime" class="form-control" placeholder="Broj telefona" />
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="roditeljiZaposleni"
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
          id="roditeljiZaposleni"
        />
        <label class="form-check-label" for="defaultCheck1">
          Rom?
        </label>
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Bitne napomene</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
};
export default Register;
