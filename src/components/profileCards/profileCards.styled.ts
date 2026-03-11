import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const Header = styled.div`
  display: flex;
  position: fixed;
  flex-direction: row;
  top: 0;
  left: 240px;
  background-color: #c52319;
  align-items: flex-start;
  padding: 15px;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardsGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Spacer = styled.br`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;
