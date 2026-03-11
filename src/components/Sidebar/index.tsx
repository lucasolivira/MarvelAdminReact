import { Outlet, useNavigate } from 'react-router-dom';
import ThemeToggle from '../../contexts/ThemeToggle';
import * as S from './sidebar.styled';

const SidebarPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Sidebar>
        <S.Logo src="img/MarvelAdmin.png" alt="Logo" />

        <S.Menu>
          <ThemeToggle />

          <S.Button onClick={() => navigate('/home')}>Home Page</S.Button>
          <S.Button onClick={() => navigate('/app')}>App Page</S.Button>
          <S.Button onClick={() => navigate('/user')}>User Page</S.Button>
          <S.Button onClick={() => navigate('/card')}>Card Page</S.Button>
          <S.Button onClick={() => navigate('/viacep')}>Viacep Page</S.Button>
          <S.Button onClick={() => navigate('/herocard')}>
            Hero Cards Page
          </S.Button>
          <S.Button onClick={() => navigate('/heromissions')}>
            Hero Missions Page
          </S.Button>
        </S.Menu>
      </S.Sidebar>

      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  );
};

export default SidebarPage;
