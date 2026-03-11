import { useEffect, useState } from 'react';
import axios from 'axios';
import ActionButton from '../ActionButton';
import Card from '../ProfileCards/Card';
import CardHeader from '../ProfileCards/CardHeader';
import CardBody from '../ProfileCards/CardBody';
import CardFooter from '../ProfileCards/CardFooter';
import ScrollView from '../ScrollViwComponent/ScrollCards';
import * as S from './heroCardsComponent.styled';

const HeroCardPage = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.post('http://localhost:4000/select', {
          objectName: 'Hero__c',
        });
        setHeroes(response.data);
      } catch (error) {
        console.error('Erro ao buscar heróis:', error);
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
      <S.Header>
        <S.Counter>
          <p>Existing Heroes: {heroes.length}</p>
        </S.Counter>
        <S.Title>Hero Cards Page</S.Title>
      </S.Header>

      <S.CardsContainer>
        {heroes.map((hero: any) => (
          <Card key={hero.Id} variant="default">
            <CardHeader>
              <h2>{hero.Name}</h2>
            </CardHeader>

            <CardBody>
              <ScrollView>
                <p>{hero.Bio__c || 'No bio'}</p>
              </ScrollView>
            </CardBody>

            <CardFooter>
              <ActionButton
                label={'Teste Button'}
                onPress={() => console.log('clicado')}
                disabled={isDisable}
              />
            </CardFooter>
          </Card>
        ))}
      </S.CardsContainer>
    </>
  );
};

export default HeroCardPage;
