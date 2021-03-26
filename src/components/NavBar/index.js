import React from 'react';
import * as S from "./styles"
import { useHistory } from 'react-router-dom'
import { goToCreateImage, goToHomePage, goToLoginPage, goToSignUpPage } from '../../Routes/coordinator';


function NavBar({ rightButtonText, setRightButtonText }) {
    const token = localStorage.getItem("token")
    const history = useHistory()


    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Cadastre-se")
            goToLoginPage(history)
        } else {
            goToSignUpPage(history)
        }
    }


    return (
        <>
            <S.Container>
                <S.Title>
                    <h3 onClick={() => goToHomePage(history)}>LOGO</h3>
                    <div>
                        <p onClick={() => goToHomePage(history)}>Explorar</p>
                        <p onClick={() => goToCreateImage(history)}>Fazer Upload</p>

                        <button onClick={rightButtonAction}>{rightButtonText}</button>
                    </div>
                </S.Title>

                {/* <div>
                    <S.Input placeholder="Pesquisar..." />
                </div> */}

            </S.Container>


        </>
    )
}

export default NavBar;