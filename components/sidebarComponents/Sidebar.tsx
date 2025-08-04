import { Outlet, useNavigate } from "react-router-dom";
import ThemeToggle from "../../src/contexts/ThemeToggle";
import ScrollViewSidebar from "../scrollViwComponent/ScrollSidebar";

const SidebarPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          position: "fixed",
          flexDirection: "column",
          padding: "8px",
          top: 0,
          left: 0,
          backgroundColor: "#5b5a5ae6",
          width: "14rem",
          height: "100%",
        }}
      >
        <img src="img/MarvelAdmin.png" alt="Logo" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "5px",
            marginTop: "5px",
          }}
        >
          <ThemeToggle />

          <button onClick={() => navigate("/home")}>Home Page</button>
          <button onClick={() => navigate("/app")}>App Page</button>
          <button onClick={() => navigate("/user")}>User Page</button>
          <button onClick={() => navigate("/card")}>Card Page</button>
          <button onClick={() => navigate("/viacep")}>Viacep Page</button>
          <button onClick={() => navigate("/herocard")}>Hero Cards Page</button>
          <button onClick={() => navigate("/heromissions")}>
            Hero Missions Page
          </button>
        </div>
      </div>
      <div
        style={{
          marginLeft: "14rem",
          minHeight: "100%",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarPage;
