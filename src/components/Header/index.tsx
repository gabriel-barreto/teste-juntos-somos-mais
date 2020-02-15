import React from 'react';

import brand from '../../assets/juntos-somos-mais.svg';

import * as S from './styled';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderBrand
          src={brand}
          alt="Juntos Somos Mais"
          title="Juntos Somos Mais"
        />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}

export default Header;
