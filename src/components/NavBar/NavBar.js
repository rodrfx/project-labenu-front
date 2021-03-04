import React from 'react';
import * as S from "./styles"
import { useHistory } from 'react-router-dom'
import { goToCreateImage, goToHomePage, goToSignUpPage } from '../../Routes/coordinator';


function NavBar() {
const history = useHistory()


    return (
        <>
        <S.Container>
        <S.Title>
        <h3 onClick= {() => goToHomePage(history)}>LOGO</h3>
         <div>
         <p>Explorar</p>
         <p onClick= {() => goToCreateImage(history)}>Fazer Upload</p>

         <button onClick= {() => goToSignUpPage(history)}>Cadastre-se</button>
         </div>
         </S.Title>

        <div>
        <S.Input placeholder= "Pesquisar..."/>
        </div>

        </S.Container>


        </>
    )
}

export default NavBar;