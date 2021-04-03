import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import useProtectPage from '../../hooks/useProtectPage';
import * as S from './styles';
import { createImage } from '../../services/image'
import { useHistory } from 'react-router';
import logo from '../../assets/logo.png'

function CreateImagePage() {
    useProtectPage()
    const { form, onChange, resetForm } = useForm({ subtitle: "", author: "", file: "", collection: "", tags: "" })
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createImage(form, resetForm, history, setIsLoading)
        // console.log(form)
    }

    return (
        <S.Container>
            <img src={logo} alt="logomarca" />
            <h1>Cadastrar imagem</h1>
            <S.FormContainer onSubmit={handleSubmission}>
                <input
                    name="subtitle"
                    value={form.subtitle}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Nome da imagem"
                    required
                />
                <input
                    name="author"
                    value={form.author}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Autor"
                    required
                />
                <input
                    name="file"
                    value={form.file}
                    onChange={handleInputChange}
                    type="url"
                    placeholder="Link da imagem"
                    required
                />
                <input
                    name="collection"
                    value={form.collection}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Coleção"
                    required
                />
                <input
                    name="tags"
                    value={form.tags}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Tags"
                    required
                />
                <button>
                    {isLoading ? <>Carregando...</> : <>Enviar</>}
                </button>
            </S.FormContainer>

        </S.Container>
    )
}

export default CreateImagePage;