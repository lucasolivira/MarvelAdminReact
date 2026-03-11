import { useEffect, useState } from 'react';
import axios from 'axios';
import ScrollViewCards from '../ScrollViwComponent/ScrollCards';
import Card from '../ProfileCards/Card';
import CardHeader from '../ProfileCards/CardHeader';
import CardBody from '../ProfileCards/CardBody';
import * as S from './heroMissionsComponent.styled';

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
        const response = await axios.post('http://localhost:4000/select', {
          objectName: 'Mission__c',
        });
        setMissions(response.data);
      } catch (error) {
        console.error('Erro ao buscar heróis:', error);
      }
    };

    fetchMissions();
  }, [filter]);

  const handleFilterChange = (newFilter: string | null) => {
    setFilter(newFilter);
    console.log('newFilter:', newFilter);
  };

  const filteredMissions = filter
    ? missions.filter((mission: any) => mission.Status__c === filter)
    : missions;

  console.log('filter:', filter);
  console.log(
    'Todos os status recebidos:',
    missions.map((m) => m.Status__c)
  );

  return (
    <>
      <S.Header>
        <S.Title>Hero Missions Page</S.Title>
      </S.Header>

      <S.FilterBar>
        <S.Button onClick={() => handleFilterChange('Not Started')}>
          Not Started
        </S.Button>
        <S.Button onClick={() => handleFilterChange('In Progress')}>
          In Progress
        </S.Button>
        <S.Button onClick={() => handleFilterChange('Completed')}>
          Completed
        </S.Button>
        <S.Button onClick={() => handleFilterChange(null)}>
          Reset Filter
        </S.Button>
      </S.FilterBar>

      <S.CardsContainer>
        {filteredMissions.length > 0 ? (
          filteredMissions.map((mission: any) => (
            <Card key={mission.Id} variant="default">
              <CardHeader>
                <h2>{mission.Name}</h2>
              </CardHeader>
              <CardBody>
                <ScrollViewCards>
                  <S.DescriptionTitle>
                    <b>Description:</b>
                  </S.DescriptionTitle>
                  <p>{mission.Description__c || 'No Description'}</p>
                </ScrollViewCards>
              </CardBody>
            </Card>
          ))
        ) : (
          <p>Nenhuma missão encontrada.</p>
        )}
      </S.CardsContainer>
    </>
  );
};

export default HeroMissionsPage;
