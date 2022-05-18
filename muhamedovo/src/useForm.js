import { useState, useEffect } from "react";

const useForm = (callback,provjera) => {
    const[values, setValues] = useState({
        username: '',
        prezime:'',
        imeRoditelja:'',
        datum:'',
        brojT:'',
        grad:'',
        adresa:'',
        email: '',
        napomene:'',
        password: '',
        password2: ''   
    })
    const [errors, setErrors] = useState({})
    const[isSubmitting, setIsSubmitting] = useState(false);

    const promjena = p => {
        const {name, value}=p.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const refresh = p =>{
        p.preventDefault();

        setErrors(provjera(values))
        setIsSubmitting(true);
    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        },
        [errors]
      );

return {promjena, values, refresh, errors}
}

export default useForm;