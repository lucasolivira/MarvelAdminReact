import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import App from "./pages/App";
import UserDetails from "../components/userdetailsComponents/Index";
import CardPage from "../components/profileCards/Index";
import ViacepPage from "../components/viacepSdieEffect/Index";
import SidebarPage from "../components/sidebarComponents/Sidebar";
import HeroCardPage from "../components/heroCardsComponent/Index";
import HeroTasksPage from "../components/heroTasksComponent/Index";

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
        <Route path="/herotasks" element={<HeroTasksPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
