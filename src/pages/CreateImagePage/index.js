import React from 'react';
import { useForm } from '../../hooks/useForm';
import useProtectPage from '../../hooks/useProtectPage';
import * as S from './styles';
import { createImage } from '../../services/image'
import { useHistory } from 'react-router';

function CreateImagePage() {
    useProtectPage()
    const history = useHistory()
    const { form, onChange, resetForm } = useForm({ subtitle: "", author: "", date: "", file: "", collection: "", tags: [""] })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createImage(form, resetForm, history)
        console.log(form)
    }

    return (
        <div>
            <div>
                <S.Container>
                    <h1> Adicionar nova imagem</h1>
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
                            name="date"
                            value={form.date}
                            onChange={handleInputChange}
                            type="date"
                            placeholder="Data"
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
                        <button>Enviar</button>
                    </S.FormContainer>

                </S.Container>
            </div>
        </div>
    )
}

export default CreateImagePage;