import { ReactNode } from 'react';
import * as S from './card.styled';

interface Props {
  variant?: 'default' | 'compact';
  children: ReactNode;
}

export default function Card({ variant = 'default', children }: Props) {
  return <S.Container variant={variant}>{children}</S.Container>;
}
