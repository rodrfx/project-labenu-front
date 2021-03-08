import React from 'react';
import * as S from './styles';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { goToSignUpPage } from '../../Routes/coordinator'
import { login } from '../../services/user'

function LoginPage({setRightButtonText}) {
    
    // useUnprotectPage();

    const { form, onChange, resetForm } = useForm ({email: "", password: ""})
    const history = useHistory()

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange (value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history, setRightButtonText)
        resetForm()
        
    }

    return (
        <div>
            <S.Container>
                <S.FormContainer onSubmit={handleSubmission} >
                    <input
                        name= "email"
                        value= {form.email}
                        onChange= {handleInputChange}
                        type= "email"
                        placeholder= "E-mail"
                        required
                    />
                    <input
                        name= "password"
                        value= {form.password}
                        onChange= {handleInputChange}
                        type= "password"
                        placeholder= "Senha"
                        required
                    />
                    <button>Login</button>
                </S.FormContainer>

                <button onClick= {()=> goToSignUpPage(history)} > Não possui conta? Cadastre-se</button>


            </S.Container>
        </div>
    )
}

export default LoginPage;