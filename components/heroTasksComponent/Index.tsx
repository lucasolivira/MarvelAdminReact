import { useEffect, useState } from "react";
import "../../src/pages/index.css";
import axios from "axios";

const HeroTasksPage = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.post("http://localhost:4000/select", {
          objectName: "Hero__c",
        });
        setHeroes(response.data);
      } catch (error) {
        console.error("Erro ao buscar heróis:", error);
      }
    };

    fetchHeroes();
  }, []);

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
        <h1 style={{ margin: 0 }}>Hero Cards Page</h1>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <p>Tasks</p>
      </div>
    </>
  );
};

export default HeroTasksPage;
