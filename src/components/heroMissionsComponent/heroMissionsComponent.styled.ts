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

export const FilterBar = styled.div`
  display: flex;
  position: fixed;
  top: 85px;
  left: 240px;
  width: calc(100% - 240px);
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 105px;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const DescriptionTitle = styled.p`
  text-align: center;
`;
