import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ThemeToggle from "../../src/contexts/ThemeToggle";
import { ThemeProvider } from "../../src/contexts/ThemeContext";
import "../../src/pages/index.css";
import ActionButton from "../actionButtons/ActionButton";

const HomePage = () => {
  const navigate = useNavigate();
  const handleApp = () => {
    navigate("/app");
  };
  const [mensage, setMensage] = useState<boolean>(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (mensage) {
      alert("Na Página de Login deve criar seu login.");
    }
  }, [mensage]);

  const isDisable = false;

  return (
    <ThemeProvider>
      <div
        style={{
          display: "flex",
          position: "fixed",
          flexDirection: "row",
          top: 0,
          left: "240px",
          backgroundColor: "#c52319",
          alignItems: "left",
          padding: "15px",
          width: "100%",
        }}
      >
        <h1 style={{ margin: 0 }}>Home Page</h1>
      </div>

      <div
        style={{
          display: "grid",
          justifyItems: "center",
        }}
      >
        <h1>Home Page</h1>
        <ThemeToggle />
        <br />
        <div>
          <button onClick={() => setMensage((m) => !m)}>
            Mensage de Login
          </button>
        </div>
        <br />
        <div>
          <button onClick={handleApp}>Página App</button>
        </div>
        <br />
        <div>
          <ActionButton
            label={"Teste Button"}
            onPress={() => console.log("clicado")}
            disabled={isDisable}
          ></ActionButton>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
