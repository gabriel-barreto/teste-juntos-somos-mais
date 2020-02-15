import styled from 'styled-components';

import { Colors, Container } from '../../styles';

export const HeaderBrand = styled.img`
  height: auto;
  max-height: 6.4rem;
  max-width: 12.8rem;
  object-fit: contain;
  object-position: center;
  width: auto;
`;

export const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
`;

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid ${Colors.lightGray.hex()};
  padding: 1.6rem 0;
`;
