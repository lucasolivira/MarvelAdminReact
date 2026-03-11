import { ReactNode } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import * as S from './CardFooter.styled';

interface Props {
  children: ReactNode;
}

export default function CardFooter({ children }: Props) {
  const { isDarkMode } = useTheme();

  return <S.Container $isDarkMode={isDarkMode}>{children}</S.Container>;
}
