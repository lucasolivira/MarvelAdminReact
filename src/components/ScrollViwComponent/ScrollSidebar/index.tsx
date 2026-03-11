import React from 'react';
import * as S from './scrollSidebar.styled';

const ScrollViewSidebar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default ScrollViewSidebar;
