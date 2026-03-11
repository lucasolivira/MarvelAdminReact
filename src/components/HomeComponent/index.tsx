import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import ActionButton from '../ActionButton';
import { ThemeProvider } from '../../contexts/ThemeContext';
import ThemeToggle from '../../contexts/ThemeToggle';
import * as S from './homeComponents.styled';

const HomePage = () => {
  const navigate = useNavigate();

  const handleApp = () => {
    navigate('/app');
  };

  const [mensage, setMensage] = useState<boolean>(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (mensage) {
      alert('Na Página de Login deve criar seu login.');
    }
  }, [mensage]);

  const isDisable = false;

  return (
    <ThemeProvider>
      <S.Header>
        <S.Title>Home Page</S.Title>
      </S.Header>

      <S.Container>
        <h1>Home Page</h1>

        <ThemeToggle />

        <S.Spacer />

        <div>
          <S.Button onClick={() => setMensage((m) => !m)}>
            Mensage de Login
          </S.Button>
        </div>

        <S.Spacer />

        <div>
          <S.Button onClick={handleApp}>Página App</S.Button>
        </div>

        <S.Spacer />

        <div>
          <ActionButton
            label={'Teste Button'}
            onPress={() => console.log('clicado')}
            disabled={isDisable}
          />
        </div>
      </S.Container>
    </ThemeProvider>
  );
};

export default HomePage;
