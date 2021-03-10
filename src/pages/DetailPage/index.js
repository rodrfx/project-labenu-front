import React from 'react';
import useProtectPage from '../../hooks/useProtectPage';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';


function DetailPage() {
  useProtectPage()
  const params = useParams()
  // console.log(params)
  const imageData = useRequestData([], `${BASE_URL}/image/${params.id}`)[0]
  console.log(imageData)

  return (
  
    <S.Container>
      <S.Card>
        {imageData && 
        <S.Info>
          <img src={imageData.file} alt={imageData.subtitle}/>
          <h3>Local: {imageData.subtitle}</h3>
          <p>Autor: {imageData.author}</p>
          <p>Data: {imageData.date}</p>
        </S.Info>

          
          }
      </S.Card>
    </S.Container>
  
  )
}

export default DetailPage;