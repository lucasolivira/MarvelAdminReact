import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import App from './pages/App';
import SidebarPage from './components/Sidebar';
import UserDetails from './pages/UserDetails';
import CardPage from './components/ProfileCards/Index';
import ViacepPage from './components/Viacep';
import HeroCardPage from './components/HeroCardsComponent';
import HeroMissionsPage from './components/HeroMissionsComponent/Index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<SidebarPage />}>
        <Route path="/home" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/viacep" element={<ViacepPage />} />
        <Route path="/herocard" element={<HeroCardPage />} />
        <Route path="/heromissions" element={<HeroMissionsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
