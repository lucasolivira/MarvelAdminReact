import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as S from './viacep.styled';

type Address = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

const ViacepPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/home');
  };

  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState('');

  const handleCep = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = e.target.value.replace(/[^0-9]/g, '');
    setCep(valorDigitado);
  };

  useEffect(() => {
    if (cep.length !== 8) {
      setAddress(null);
      setError('Complete o CEP com 8 dígitos.');
      return;
    }

    const fetchAddress = async () => {
      try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await resposta.json();

        if (data.erro) {
          setError('CEP não encontrado!');
          setAddress(null);
        } else {
          setAddress({
            logradouro: data.logradouro,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
          });
          setError('');
        }
      } catch {
        setError('Erro ao buscar o CEP.');
        setAddress(null);
      }
    };

    fetchAddress();
  }, [cep]);

  return (
    <>
      <S.Header>
        <S.Title>Viacep Page</S.Title>
      </S.Header>

      <S.Container>
        <h1>API ViaCep Integration</h1>

        <S.Button onClick={handleHome}>Home Page</S.Button>

        <S.Spacer />

        <h2>Consultar Endereço por CEP</h2>

        <S.Input
          type="text"
          maxLength={8}
          value={cep}
          onChange={handleCep}
          placeholder="Digite o CEP"
        />

        {error && <S.Error>{error}</S.Error>}

        {address && (
          <S.AddressBox>
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
          </S.AddressBox>
        )}
      </S.Container>
    </>
  );
};

export default ViacepPage;
