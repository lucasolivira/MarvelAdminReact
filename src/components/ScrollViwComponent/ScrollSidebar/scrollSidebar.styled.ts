import styled from 'styled-components';

export const Container = styled.div`
  max-height: calc(100vh - 150px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
