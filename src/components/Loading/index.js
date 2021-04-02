import React from 'react';
import * as S from './styles'
import Logo from '../../assets/logo.png';

function Loading() {
  return(
      <S.Rotate>
          <S.Image src={Logo} alt="logomarca"/>
      </S.Rotate>
  )
}

export default Loading;