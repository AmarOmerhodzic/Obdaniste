import React from 'react'
import useForm from './useForm'
import provjera from './provjera'
import './Form.css'

const FormSignup = ({submitForm}) => {
const {promjena, values, refresh, errors}=useForm(submitForm, provjera);

  return (

 
    <div className="form-content-right">
        <form className="form" onSubmit={refresh}>
            <h1>Pridružite nam se danas. Popunti podatke:</h1>
            <div className="form-inputs">
                <label htmlFor="username" className="form-label">
                    Ime
                </label>
                <input id='username' 
                type="text" name="username" 
                className="form-input" 
                placeholder='Unesite ime djeteta' 
                value={values.username} 
                onChange={promjena}/>
                {errors.username && <p>{errors.username}</p>}
            </div>


            <div className="form-inputs">
                <label htmlFor="username" className="form-label">
                    Prezime
                </label>
                <input id='prezime' 
                type="text" 
                name="prezime"
                 className="form-input"
                  placeholder='Unesite prezime djeteta'
                  value={values.prezime} 
                onChange={promjena}/>
                 {errors.prezime && <p>{errors.prezime}</p>}
            </div>
 

            <div className="form-inputs">
                <label htmlFor="imeR" className="form-label">
                    Ime roditelja
                </label>
                <input id='imeRoditelja' 
                type="text" 
                name="imeRoditelja"
                 className="form-input"
                  placeholder='Unesite ime roditelja'
                  value={values.imeRoditelja} 
                onChange={promjena}/>
                 {errors.imeRoditelja && <p>{errors.imeRoditelja}</p>}
            </div>


            <div className="form-inputs">
                <label htmlFor="username" className="form-label">
                    Datum rođenja djeteta
                </label>
                <input id='datum' 
                type="date" 
                name="datum"
                 className="form-input"
                  placeholder='Unesite datum rođenja djeteta'
                  value={values.datum} 
                onChange={promjena}/>
                 {errors.datum && <p>{errors.datum}</p>}
            </div>


            <div className="form-inputs">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input id='email' 
                type="email" 
                name="email"
                 className="form-input"
                  placeholder='Unesite email'
                  value={values.email} 
                onChange={promjena}/>
                 {errors.email && <p>{errors.email}</p>}
            </div>


            <div className="form-inputs">
                <label htmlFor="brojT" className="form-label">
                    Broj telefona
                </label>
                <input id='brojT' 
                type="phone" 
                name="brojT"
                 className="form-input"
                  placeholder='Unesite broj telefona'
                  value={values.brojT} 
                onChange={promjena}/>
                 {errors.brojT && <p>{errors.brojT}</p>}
            </div>

 
            <div className="form-inputs">
                <label htmlFor="grad" className="form-label">
                    Grad stanovanja
                </label>
                <input id='grad' 
                type="text" 
                name="grad"
                 className="form-input"
                  placeholder='Unesite grad stanovanja'
                  value={values.grad} 
                onChange={promjena}/>
                 {errors.grad && <p>{errors.grad}</p>}
            </div>


            <div className="form-inputs">
                <label htmlFor="adresa" className="form-label">
                    Adresu stanovanja
                </label>
                <input id='adresa' 
                type="text" 
                name="adresa"
                 className="form-input"
                  placeholder='Unesite adresu stanovanja'
                  value={values.adresa} 
                onChange={promjena}/>
                 {errors.adresa && <p>{errors.adresa}</p>}
            </div> 


            <div className="form-inputs">
            <label htmlFor="zaposleni" 
            className="form-label" 
            placeholder=' '>
                    Da li su roditelji zaposleni:   
                </label>
            <select name="zaposleni"
             id="rom" 
             className="form-input">
            <option value="da4">Da</option>
            <option value="ne4">Ne</option> 
            <option value="jedan">Jedan roditelj je zaposlen.</option>           
            </select>
            </div> 

 
            <div className="form-inputs">
            <label htmlFor="razvod"
             className="form-label"
              placeholder=' '>
                    Da li su roditelji djeteta razvedeni:   
                </label>

            <select name="razvod"
             id="razvod" 
             className="form-input">
            <option value="ne5">Ne</option>
            <option value="da5">Da</option>           
            </select>
            </div> 


            <div className="form-inputs">
            <label htmlFor="samohrani" 
            className="form-label"
             placeholder=' '>
                    Da li je dijete samohranog roditelja:   
                </label>

            <select name="samohrani"
             id="samohrani" 
             className="form-input">
            <option value="ne2">Ne</option>
            <option value="da2">Da</option>           
            </select>
            </div> 


            <div className="form-inputs">
            <label htmlFor="bezR" 
            className="form-label" 
            placeholder=' '>
                    Da li je dijete bez oba roditelja:   
                </label>

            <select name="bezR"
             id="bezR" 
             className="form-input">
            <option value="ne">Ne</option>
            <option value="da">Da</option>           
            </select>
            </div> 




            <div className="form-inputs">
            <label htmlFor="rom"
             className="form-label" 
             placeholder=' '>
                    Da li je dijete romske vjeroispovjesti:   
                </label>

            <select name="rom"
             id="rom" 
             className="form-input">
            <option value="ne3">Ne</option>
            <option value="da3">Da</option>           
            </select>
            </div> 


            <div className="form-inputs">
                <label htmlFor="napomene" className="form-label">
                    Bitne napomene: 
                </label>
                <input id='napomene' 
                type="text" name="napomene" 
                className="form-input" 
                placeholder='' 
                value={values.napomene}           
                onChange={promjena}/>
            </div>


            <div className="form-inputs">
                <label htmlFor="password" className="form-label">
                    Lozinka
                </label>
                <input id='password'
                 type="password" 
                 name="password" 
                 className="form-input" 
                 placeholder='Unesite lozinku'
                 value={values.password} 
                onChange={promjena}/>
                 {errors.password && <p>{errors.password}</p>}
            </div>


            <div className="form-inputs">
                <label htmlFor="password2" className="form-label">
                    Potvrdite lozinku
                </label>
                <input id='password2'
                 type="password"
                  name="password2" 
                  className="form-input"
                   placeholder='Unesite lozinku ponovo'
                   value={values.password2} 
                onChange={promjena}/>
                 {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-button-btn' type='submit'>Sign up</button>
            <span className='form-input-login'>Vec ste prijavljheni? <a href='#'>Login.</a> 
            </span>
        </form>
    </div>

  )
}

export default FormSignup