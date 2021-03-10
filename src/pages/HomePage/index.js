import React from 'react';
import * as S from './styles';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import InfoCard from '../../components/InfoCard';
import { goToDetailPage } from '../../Routes/coordinator';
import { useHistory } from 'react-router-dom';  


function HomePage() {
    const history = useHistory()
    const imageData= useRequestData([], `${BASE_URL}/image/all`)
    // console.log(imageData[0])

    const onCLickCard = (id) => {
        goToDetailPage(history, id)
    }
    
    const cardData = imageData[0].map((item)=>{
        return (
            <InfoCard
            key = {item.id}
            title= {item.subtitle}
            image= {item.file}
            author= {item.author}
            onClickCard = {() => onCLickCard(item.id)}
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