import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ViacepPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  type Address = {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  };

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState("");

  const handleCep = (i) => {
    const valorDigitado = i.target.value.replace(/[^0-9]/g, "");
    setCep(valorDigitado);
  };

  useEffect(() => {
    if (cep.length !== 8) {
      setAddress(null);
      setError("");
      return;
    }

    const fetchAddress = async () => {
      console.log("Buscando o CEP");

      try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await resposta.json();

        if (data.erro) {
          setError("CEP não encontrado!");
          setAddress(null);
        } else {
          setAddress({
            logradouro: data.logradouro,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
          });
          setError("");
        }
      } catch {
        setError("Erro ao buscar o CEP.");
        setAddress(null);
      }
    };
    fetchAddress();
  }, [cep]);

  return (
    <div>
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
        <h1 style={{ margin: 0 }}>Viacep Page</h1>
      </div>
      <div>
        <h1>API ViaCep Integration</h1>
        <button onClick={handleHome}>Home Page</button>
      </div>
      <div style={{ padding: "2rem" }}>
        <h2>Consultar Endereço por CEP</h2>
        <input
          type="text"
          maxLength={8}
          value={cep}
          onChange={handleCep}
          placeholder="Digite o CEP"
          style={{
            width: "auto",
            height: "20px",
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {address && (
          <div
            style={{ marginTop: "1rem", border: "solid", borderWidth: "1px" }}
          >
            <p>
              <strong>Logradouro:</strong> {address.logradouro}
            </p>
            <p>
              <strong>Bairro:</strong> {address.bairro}
            </p>
            <p>
              <strong>Cidade:</strong> {address.localidade}
            </p>
            <p>
              <strong>Estado:</strong> {address.uf}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViacepPage;
/* 
SideEffect: É qualquer ação que não está relacionanda diretamente com o componente principal 
do react. Exemplos disso são as chamadas de API's, manipulações do DOM ou qualquer alteração 
no estado da aplicação que não seja o resultado direto da atualização do componente. 
*/
