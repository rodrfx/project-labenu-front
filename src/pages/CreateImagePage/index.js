import React from 'react';
import * as S from './styles';


function CreateImagePage() {
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