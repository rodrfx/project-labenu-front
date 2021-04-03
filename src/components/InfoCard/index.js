import React from 'react';
import * as S from './styles';

function InfoCard(props) {

    return (
        <S.Container onClick={props.onClickCard}>
            <img src={props.image} alt={props.title} />
            <S.Info>
                <h4><b> {props.title} </b></h4>
                <p> {props.author} </p>
            </S.Info>
        </S.Container>
    )
}

export default InfoCard;