import React from 'react';
import useProtectPage from '../../hooks/useProtectPage';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import Loading from '../../components/Loading';

function DetailPage() {
  useProtectPage()
  const params = useParams()
  // console.log(params)

  const imageData = useRequestData([], `${BASE_URL}/image/${params.id}`)
  // console.log(imageData[0].imageId)
  const imageInfo = imageData[0].imageId

  return (
    <S.Container>
      <S.Card>
        {imageInfo ?
          <S.Info>
            <S.CardImage
              src={imageInfo.file} alt={imageInfo.subtitle}
            />
            <h3>{imageInfo.subtitle}</h3>
            <p>Autor: {imageInfo.author}</p>
            <p>Data: {imageInfo.date}</p>
            <p>Coleção: {imageInfo.collection}</p>
          </S.Info>
          :
          <Loading />
        }
      </S.Card>
    </S.Container>

  )
}

export default DetailPage;