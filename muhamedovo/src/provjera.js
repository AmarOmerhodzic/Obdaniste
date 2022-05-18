export default function provjera(values){
    let errors={}

    if(!values.username.trim()){
        errors.username="Unesite ime"
    }

    if(!values.prezime.trim()){
        errors.prezime="Unesite prezime"
    }

    if(!values.imeRoditelja.trim()){
        errors.imeRoditelja="Unesite ime roditelja"
    }

    if(!values.datum){
        errors.datum="Unesite datum"
    }

    if(!values.brojT){
        errors.brojT="Unesite broj telefona"
    }

    if(!values.email){
        errors.email="Unesite email"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email je naispravan';
      }

      if(!values.grad){
        errors.grad="Unesite grad stanovanja"
    }

    if(!values.adresa){
        errors.adresa="Unesite adresu stanovanja"
    }

      if(!values.password){
          errors.password="Unesite lozinku"
      } else if (values.password.length < 7) {
          errors.password="Lozinka je neispravna(mora imati vise od 8 karaktera)"
      }

      if(!values.password2){
          errors.password2="Unesite lozinku"
      } else if(values.password2!==values.password){
          errors.password2="Neispravan unos"
      }

      return errors;
}