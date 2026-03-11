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

export const Container = styled.div`
  padding: 2rem;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Input = styled.input`
  width: auto;
  height: 20px;
`;

export const Error = styled.p`
  color: red;
`;

export const AddressBox = styled.div`
  margin-top: 1rem;
  border: solid 1px;
  padding: 10px;
`;

export const Spacer = styled.br``;
