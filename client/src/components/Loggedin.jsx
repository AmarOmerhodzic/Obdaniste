import React,{useEffect,useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
const Loggedin=() => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const logout = async() =>{
    localStorage.clear()
    navigate('/login')
  }
  useEffect((event) => {
    async function takeData(){
       setUserName(
        await JSON.parse(
          localStorage.getItem('userInfo')
        )
      );
       }
        takeData();
  },[]);
  return (
    <Container>
      <div class="row">
                    
                    <div class="col-md-20" >
                        <div class="profile-head pt-4 text-center ms-5">
                                    <h1>
                                    Dobrodošli {userName.imeRoditelja} {userName.prezime}
                                    </h1>
                                    
                                    
            
                        </div>
                    </div>
                    <div class="col-md-20 text-end me-2 pe-5 " onClick={logout}>
                        <input type="submit" class="profile-edit-btn" className="btn btn-outline-primary ms-2 px-4 rounded-pill " name="btnAddMore" value="Odjava" />
                    </div>
                </div>
                <ul class="nav nav-tabs ms-4" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                
                            </ul>
                <div class="row">
                
                    <div class="col-md-8">
                    
                    <div className='User'>
                        <div class="col-md-4 ms-3 pt-1" >
                        <div class='profile-img pt-5 w-100 ms-5'>
                            <img src="/assets/slika.png" alt="" class="rounded mx-auto d-block img-thumbnail" class="border border-white w-75"/>
                            
                        </div>
                    </div>
                            <div className='user-info pt-4'>
                              
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Ime:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userName.imeRoditelja}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Prezime:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userName.prezime}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userName.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Telefon:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userName.brojTelefona}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Adresa:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userName.adresaStanovanja}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Grad:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userName.gradStanovanja}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Bitne napomene:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userName.bitneNapomene}</p>
                                            </div>
                                        </div>
                                        
                            </div>
                            </div>
                        </div>
                    </div>
                
      
    </Container>
  )
}
const Container = styled.div`
.User{
  display: flex;
  width: 100vw;
  
}
.user-info{
  width: 60%;
  box-shadow: 10px 5px 5px #f59842;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  label{
    padding: 10px;

  }
  p{
    padding: 10px;
  }
}
.container{
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: 35% 65%;
  }
}
`;
export default Loggedin;