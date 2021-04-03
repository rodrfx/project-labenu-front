import React from 'react';
import * as S from "./styles"
import { useHistory } from 'react-router-dom'
import { goToCreateImage, goToLoginPage, goToSignUpPage } from '../../Routes/coordinator';
import logo from "../../assets/logo.png"

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
                    <div>
                        <img onClick={() => goToLoginPage(history)} src={logo} alt="logomarca" />
                        <h1 onClick={() => goToLoginPage(history)}> Photo Wall</h1>
                    </div>
                    <div>
                        <p onClick={() => goToLoginPage(history)}>Explorar</p>
                        <p onClick={() => goToCreateImage(history)}>Fazer Upload</p>

                        <button onClick={rightButtonAction}>{rightButtonText}</button>
                    </div>
                </S.Title>
            </S.Container>
        </>
    )
}

export default NavBar;