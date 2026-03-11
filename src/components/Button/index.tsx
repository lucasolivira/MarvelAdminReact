import type { ButtonColor, ButtonSize } from './button.types';
import * as S from './button.styled';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
}

export function Button({
  color = 'primary',
  size = 'medium',
  ...rest
}: ButtonProps) {
  return <S.StyledButton color={color} size={size} {...rest}></S.StyledButton>;
}
