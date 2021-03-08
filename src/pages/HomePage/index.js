import React from 'react';
import * as S from './styles';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import InfoCard from '../../components/InfoCard';


function HomePage() {
    const imageData= useRequestData([], `${BASE_URL}/image/all`)
    // console.log(imageData[0])

    const cardData = imageData[0].map((item)=>{
        return (
            <InfoCard 
            key = {item.id}
            title= {item.subtitle}
            image= {item.file}
            author= {item.author}
            />
            )
        })

    return (
        
        <S.Container>
              
              {cardData}

        </S.Container>
    )
}

export default HomePage;