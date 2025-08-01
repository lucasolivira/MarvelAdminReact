import { useEffect, useState } from "react";
import "../../src/pages/index.css";
import axios from "axios";
import Card from "../profileCards/Card";
import CardHeader from "../profileCards/CardHeader";
import ActionButton from "../actionButtons/ActionButton";
import CardBody from "../profileCards/CardBody";
import CardFooter from "../profileCards/CardFooter";
import ScrollView from "../scrollViwComponent/ScrollCards";

const HeroCardPage = () => {
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

  const handleButtonClick = (action: string, heroId: string) => {
    console.log(`Ação: ${action} para herói ID: ${heroId}`);
  };

  const isDisable = false;

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
        {heroes.map((hero: any) => (
          <Card key={hero.Id} variant="default">
            <CardHeader>
              <h2>{hero.Name}</h2>
            </CardHeader>
            <CardBody>
              <ScrollView>
                <p>{hero.Bio__c || "Sem biografia"}</p>
              </ScrollView>
            </CardBody>
            <CardFooter>
              <ActionButton
                label={"Teste Button"}
                onPress={() => console.log("clicado")}
                disabled={isDisable}
              ></ActionButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default HeroCardPage;
