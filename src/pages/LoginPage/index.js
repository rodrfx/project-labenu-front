import React, { useState } from 'react';
import * as S from './styles';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { goToSignUpPage } from '../../Routes/coordinator'
import { login } from '../../services/user'
import logo from "../../assets/logo.png"
import useUnprotectPage from '../../hooks/useUnprotectPage';

function LoginPage({ setRightButtonText }) {
    useUnprotectPage()
    const { form, onChange, resetForm } = useForm({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history, setRightButtonText, resetForm, setIsLoading)
    }

    return (
        <div>
            <S.Container>
                <img src={logo} alt="Logomarca" />
                <h1>Acesse sua conta</h1>
                <S.FormContainer onSubmit={handleSubmission} >
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="E-mail"
                        required
                    />
                    <input
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        type="password"
                        placeholder="Senha"
                        required
                    />
                    <button>
                        {isLoading ? <>Carregando...</> : <> Entrar </>}
                    </button>
                </S.FormContainer>

                <S.ButtonSignup onClick={() => goToSignUpPage(history)} >
                    Não possui conta? Cadastre-se
                </S.ButtonSignup>

            </S.Container>
        </div>
    )
}

export default LoginPage;