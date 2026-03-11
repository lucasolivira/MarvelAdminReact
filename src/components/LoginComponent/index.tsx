import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as S from './LoginComponents.styled';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('aqui');
  }, []);

  const handleHome = () => {
    navigate('/home');
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Login</S.Title>
        <S.Button onClick={handleHome}>Home Page</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default LoginPage;
