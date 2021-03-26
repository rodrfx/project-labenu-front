import React from 'react';
import * as S from './styles';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import InfoCard from '../../components/InfoCard';
import { goToDetailPage } from '../../Routes/coordinator';
import { useHistory } from 'react-router-dom';  
import useProtectPage from '../../hooks/useProtectPage';


function HomePage() {
    useProtectPage()
    const history = useHistory()
    const imageData= useRequestData([], `${BASE_URL}/image/all`)
    const imageCard = imageData[0].images
    // console.log(imageData[0].images)

    const onCLickCard = (id) => {
        goToDetailPage(history, id)
    }
    
    return (    
        <S.Container>
             {imageCard &&
             imageCard.map((image)=>{
                 return(
                     <InfoCard
                        key={image.id} 
                         title= {image.subtitle}
                         image= {image.file}
                         onClickCard = {() => onCLickCard(image.id)}
                     />
                 )
             })
             }
        </S.Container>
    )
}

export default HomePage;