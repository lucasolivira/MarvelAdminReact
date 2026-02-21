import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/pages/App.css";

const AppPage = () => {
  const navigate = useNavigate();

  const handleUser = () => {
    navigate("/user");
  };

  const [count, setCount] = useState<number>(0);

  const disable = count === 0;

  const HandleClick = () => {
    setCount((count) => count + 1);
  };
  const HandleReset = () => {
    setCount(0);
  };
  return (
    <>
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
        <h1 style={{ margin: 0 }}>App Page</h1>
      </div>
      <h1>Contador: {count}</h1>
      <div className="card">
        <button onClick={() => HandleClick()}>Adicionar +1</button>
      </div>

      <div>
        <button disabled={disable} onClick={() => HandleReset()}>
          Reset
        </button>
      </div>
      <br />
      <div>
        <button onClick={handleUser}>Página UserDetails</button>
      </div>
    </>
  );
};

export default AppPage;
