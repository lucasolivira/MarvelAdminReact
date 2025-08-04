import { useEffect, useState } from "react";
import "../../src/pages/index.css";
import axios from "axios";
import Card from "../profileCards/Card";
import CardBody from "../profileCards/CardBody";
import CardHeader from "../profileCards/CardHeader";
import ScrollViewCards from "../scrollViwComponent/ScrollCards";

const HeroMissionsPage = () => {
  type Mission = {
    Id: string;
    Name: string;
    Description__c?: string;
    Status__c: string;
  };
  const [missions, setMissions] = useState<Mission[]>([]);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.post("http://localhost:4000/select", {
          objectName: "Mission__c",
        });
        setMissions(response.data);
      } catch (error) {
        console.error("Erro ao buscar heróis:", error);
      }
    };

    fetchMissions();
  }, [filter]);

  const handleFilterChange = (newFilter: string | null) => {
    setFilter(newFilter);
    console.log("newFilter:", newFilter);
  };

  const filteredMissions = filter
    ? missions.filter((mission: any) => mission.Status__c === filter)
    : missions;
  console.log("filter:", filter);
  console.log(
    "Todos os status recebidos:",
    missions.map((m) => m.Status__c),
  );

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
        <h1 style={{ margin: 0 }}>Hero Missions Page</h1>
      </div>
      <div
        style={{
          display: "flex",
          position: "fixed",
          top: "85px",
          left: "240px",
          width: "calc(100% - 240px)",
          justifyContent: "center",
          gap: "10px",
          padding: "10px",
        }}
      >
        <button onClick={() => handleFilterChange("Not Started")}>
          Not Started
        </button>
        <button onClick={() => handleFilterChange("In Progress")}>
          In Progress
        </button>
        <button onClick={() => handleFilterChange("Completed")}>
          Completed
        </button>
        <button onClick={() => handleFilterChange(null)}>Reset Filter</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "105px",
          justifyContent: "center",
        }}
      >
        {filteredMissions.length > 0 ? (
          filteredMissions.map((mission: any) => (
            <Card key={mission.Id} variant="default">
              <CardHeader>
                <h2>{mission.Name}</h2>
              </CardHeader>
              <CardBody>
                <ScrollViewCards>
                  <p style={{ textAlign: "center" }}>
                    <b>Description:</b>
                  </p>
                  <p>{mission.Description__c || "No Description"}</p>
                </ScrollViewCards>
              </CardBody>
            </Card>
          ))
        ) : (
          <p>Nenhuma missão encontrada.</p>
        )}
      </div>
    </>
  );
};

export default HeroMissionsPage;
