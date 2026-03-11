import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './appComponents.styled';

const AppPage = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState<number>(0);

  const disable = count === 0;

  const handleUser = () => {
    navigate('/user');
  };

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <S.Header>
        <S.Title>App Page</S.Title>
      </S.Header>

      <S.CounterTitle>Contador: {count}</S.CounterTitle>

      <S.Card>
        <S.Button onClick={handleClick}>Adicionar +1</S.Button>
      </S.Card>

      <S.ButtonWrapper>
        <S.Button disabled={disable} onClick={handleReset}>
          Reset
        </S.Button>
      </S.ButtonWrapper>

      <S.Spacer />

      <S.ButtonWrapper>
        <S.Button onClick={handleUser}>Página UserDetails</S.Button>
      </S.ButtonWrapper>
    </>
  );
};

export default AppPage;
