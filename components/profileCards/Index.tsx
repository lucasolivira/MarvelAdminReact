import { useNavigate } from "react-router-dom";
import Card from "../profileCards/Card";
import CardHeader from "../profileCards/CardHeader";
import CardBody from "../profileCards/CardBody";
import CardFooter from "../profileCards/CardFooter";
import ActionButton from "../actionButtons/ActionButton";

const CardPage = () => {
  const navigate = useNavigate();

  const handleViacep = () => {
    navigate("/viacep");
  };

  const profiles = [
    {
      name: "João Silva",
      description:
        "Desenvolvedor apaixonado por tecnologia com 5 anos de experiência em React, Node.js e banco de dados. Sempre bsucarndo aprender novas tecnologias e compartilhar conhecimento.",
      buttons: ["Mensagem", "Seguir"],
    },
    {
      name: "Maria Santos",
      description:
        "Designer criativa especializada em interfaces modernas e experiência do usuário. Focada em criar produtos digitais que sejam bonitos, funcionais e acessíveis para todos.",
      buttons: ["Portifolio", "Conectar"],
    },
    {
      name: "Pedro Costa",
      description:
        "Gerente experiente com background técnico, especializado em metodologias ágeis e liderança de equipes. Apaixonado por entregar produtos de qualidade no prazo.",
      buttons: ["Linkedin", "Adicionar"],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      }}
    >
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
        <h1 style={{ margin: 0 }}>Card Page</h1>
      </div>
      <br />
      <div>
        <h1>Profile Cards</h1>
        <button onClick={handleViacep}>Página viacep</button>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {profiles.map((profile, index) => (
          <Card key={index} variant="default">
            <CardHeader>
              <h2>{profile.name}</h2>
            </CardHeader>
            <CardBody>
              <p>{profile.description}</p>
            </CardBody>
            <CardFooter>
              {profile.buttons.map((label, i) => (
                <ActionButton
                  key={i}
                  label={label}
                  onPress={() => console.log("clicado")}
                  disabled={false}
                />
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
