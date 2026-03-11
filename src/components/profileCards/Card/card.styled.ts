import styled from 'styled-components';

interface ContainerProps {
  variant: 'default' | 'compact';
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-style: solid;
  border-color: #dcdcdcff;
  border-width: thin;
  border-radius: 20px;
  overflow: hidden;
  height: 400px;
  width: 350px;
  margin: 2%;
`;
