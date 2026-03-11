import { useNavigate } from 'react-router-dom';
import ActionButton from '../ActionButton';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import * as S from './profileCards.styled';

const CardPage = () => {
  const navigate = useNavigate();

  const handleViacep = () => {
    navigate('/viacep');
  };

  const profiles = [
    {
      name: 'João Silva',
      description:
        'Desenvolvedor apaixonado por tecnologia com 5 anos de experiência em React, Node.js e banco de dados. Sempre bsucarndo aprender novas tecnologias e compartilhar conhecimento.',
      buttons: ['Mensagem', 'Seguir'],
    },
    {
      name: 'Maria Santos',
      description:
        'Designer criativa especializada em interfaces modernas e experiência do usuário. Focada em criar produtos digitais que sejam bonitos, funcionais e acessíveis para todos.',
      buttons: ['Portifolio', 'Conectar'],
    },
    {
      name: 'Pedro Costa',
      description:
        'Gerente experiente com background técnico, especializado em metodologias ágeis e liderança de equipes. Apaixonado por entregar produtos de qualidade no prazo.',
      buttons: ['Linkedin', 'Adicionar'],
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>Card Page</S.HeaderTitle>
      </S.Header>

      <S.Spacer />

      <S.PageHeader>
        <h1>Profile Cards</h1>
        <S.Button onClick={handleViacep}>Página viacep</S.Button>
      </S.PageHeader>

      <S.Spacer />

      <S.CardsGrid>
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
                  onPress={() => console.log('clicado')}
                  disabled={false}
                />
              ))}
            </CardFooter>
          </Card>
        ))}
      </S.CardsGrid>
    </S.Container>
  );
};

export default CardPage;
