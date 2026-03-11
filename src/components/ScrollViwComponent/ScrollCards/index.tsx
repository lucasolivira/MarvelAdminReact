import React from 'react';
import * as S from './scrollCards.styled';

const ScrollViewCards: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default ScrollViewCards;
