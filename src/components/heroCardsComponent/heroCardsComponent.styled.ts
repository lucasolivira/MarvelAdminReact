import styled from 'styled-components';

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

export const Title = styled.h1`
  margin: 0;
`;

export const Counter = styled.div`
  position: fixed;
  top: 65px;
  left: 250px;
  background-color: transparent;
  color: #c52319;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 150%;
  max-width: 300px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px;
  justify-content: center;
`;
