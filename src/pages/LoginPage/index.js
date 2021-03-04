import React from 'react';
import * as S from './styles';



function LoginPage() {
    
    useUnprotectPage();

    const { form, onChange } = useForm ({email: "", password: ""})

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange (value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        LoginPage()
    }


    return (
        <div>
            <S.Container>
                <S.FormContainer>
                    <input
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        required
                    />
                    <button>Login</button>
                </S.FormContainer>

            </S.Container>
        </div>
    )
}

export default LoginPage;