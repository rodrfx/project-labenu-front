import React from 'react';
import * as S from './styles'



function SignUpPage() {
    return (
        <div>

                <S.Container>
                    <S.FormContainer>
                    <input
                        name="name"
                        type="name"
                        placeholder="Nome"
                        required
                    />
                    <input
                        name="name"
                        type="name"
                        placeholder="Nickname"
                        required
                    />
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
                    <button>Cadastrar</button>
                    </S.FormContainer>
                </S.Container>


        </div>
    )
}

export default SignUpPage;