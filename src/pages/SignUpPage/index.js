import React, { useState } from 'react';
import useUnprotectPage from '../../hooks/useUnprotectPage';
import * as S from './styles'
import { useForm } from '../../hooks/useForm';
import { signUp } from '../../services/user';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';

function SignUpPage({ setRightButtonText }) {
    useUnprotectPage()
    const { form, onChange, resetForm } = useForm({ name: "", email: "", password: "", nickname: "" })
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        signUp(form, history, setRightButtonText, resetForm, setIsLoading)
    }

    return (
        <S.Container>
            <img src={logo} alt="logomarca" />
            <h1>Cadastre-se</h1>
            <S.FormContainer onSubmit={handleSubmission}>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    type="name"
                    placeholder="Nome"
                    required
                />
                <input
                    name="nickname"
                    value={form.nickname}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Nickname"
                    required
                />
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
                    {isLoading ? <>Carregando...</> : <>Cadastrar</>}
                </button>
            </S.FormContainer>
        </S.Container>
    )
}

export default SignUpPage;