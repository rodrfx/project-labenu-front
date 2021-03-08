import React from 'react';
import useProtectPage from '../../hooks/useProtectPage';
import * as S from './styles';


function CreateImagePage() {
    useProtectPage()

    return (
        <div>
             <div>
            <S.Container>
                <S.FormContainer>
                    <input
                        name="name"
                        type="name"
                        placeholder="Link da imagem"
                        required
                    />
                    <button>Enviar</button>
                </S.FormContainer>

            </S.Container>
        </div>
        </div>
    )
}

export default CreateImagePage;