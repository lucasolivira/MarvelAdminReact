import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  padding: 8px;
  top: 0;
  left: 0;
  background-color: #5b5a5ae6;
  width: 14rem;
  height: 100%;
`;

export const Logo = styled.img``;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 5px;
  margin-top: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Content = styled.div`
  margin-left: 14rem;
  min-height: 100%;
`;
