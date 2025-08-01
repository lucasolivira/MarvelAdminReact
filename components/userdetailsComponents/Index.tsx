import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserDetails = () => {
  const navigate = useNavigate();
  const handleCard = () => {
    navigate("/card");
  };

  const [list, setList] = useState<boolean>(false);

  const pessoas = [
    {
      nome: "Ana Silva",
      idade: 28,
      profissao: "Engenheira",
      email: "ana.silva@email.com",
      cep: "01001-000",
    },
    {
      nome: "Carlos Souza",
      idade: 35,
      profissao: "Designer",
      email: "carlos.souza@email.com",
      cep: "02020-200",
    },
    {
      nome: "Mariana Lima",
      idade: 22,
      profissao: "Desenvolvedora",
      email: "mariana.lima@email.com",
      cep: "03030-300",
    },
    {
      nome: "João Pedro",
      idade: 40,
      profissao: "Professor",
      email: "joao.pedro@email.com",
      cep: "04040-400",
    },
    {
      nome: "Fernanda Rocha",
      idade: 31,
      profissao: "Advogada",
      email: "fernanda.rocha@email.com",
      cep: "05050-500",
    },
    {
      nome: "Lucas Martins",
      idade: 27,
      profissao: "Médico",
      email: "lucas.martins@email.com",
      cep: "06060-600",
    },
    {
      nome: "Paula Castro",
      idade: 29,
      profissao: "Arquiteta",
      email: "paula.castro@email.com",
      cep: "07070-700",
    },
    {
      nome: "Ricardo Alves",
      idade: 38,
      profissao: "Empresário",
      email: "ricardo.alves@email.com",
      cep: "08080-800",
    },
    {
      nome: "Juliana Freitas",
      idade: 26,
      profissao: "Psicóloga",
      email: "juliana.freitas@email.com",
      cep: "09090-900",
    },
    {
      nome: "Bruno Fernandes",
      idade: 33,
      profissao: "Analista de Dados",
      email: "bruno.fernandes@email.com",
      cep: "10010-000",
    },
  ];

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
        <h1 style={{ margin: 0 }}>User Page</h1>
      </div>
      <h1>Page User Details</h1>
      <div>
        <button onClick={() => setList((m) => !m)}>
          Mostrar Lista de Usuários
        </button>
      </div>
      <br />
      <div>
        <button onClick={handleCard}>Card Page</button>
      </div>

      {list && (
        <div>
          {pessoas.map((pessoa, index) => (
            <div key={index}>
              <p>Nome: {pessoa.nome}</p>
              <p>Idade: {pessoa.idade}</p>
              <p>Profissão: {pessoa.profissao}</p>
              <p>Email: {pessoa.email}</p>
              <p>CEP: {pessoa.cep}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserDetails;
