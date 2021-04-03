import React from 'react';
import * as S from './styles';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import InfoCard from '../../components/InfoCard';
import { goToDetailPage } from '../../Routes/coordinator';
import { useHistory } from 'react-router-dom';
import useProtectPage from '../../hooks/useProtectPage';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';

function HomePage() {
    useProtectPage()
    const history = useHistory()
    const imageData = useRequestData([], `${BASE_URL}/image/all`)
    const imageCard = imageData[0].images
    // console.log(imageData[0].images)

    const onCLickCard = (id) => {
        goToDetailPage(history, id)
    }

    return (
        <div>
        <S.Container>
            {imageCard ?
                    imageCard.map((image) => {
                    return (
                        <InfoCard
                            key={image.id}
                            image={image.file}
                            title={image.subtitle}
                            onClickCard={() => onCLickCard(image.id)}
                        />
                    )
                })
                : <Loading />
            }
        </S.Container>
            <Footer/>
        </div>

    )
}

export default HomePage;