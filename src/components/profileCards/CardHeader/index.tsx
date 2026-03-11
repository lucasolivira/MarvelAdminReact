import { ReactNode } from 'react';
import * as S from './CardHeader.styled';
import { useTheme } from '../../../contexts/ThemeContext';

interface Props {
  children: ReactNode;
}

export default function CardHeader({ children }: Props) {
  const { isDarkMode } = useTheme();

  return <S.Container $isDarkMode={isDarkMode}>{children}</S.Container>;
}
