import { ReactNode } from 'react';
import * as S from './cardBody.styled';

interface Props {
  children: ReactNode;
}

export default function CardBody({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
