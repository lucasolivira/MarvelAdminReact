import styled from 'styled-components';

export const Container = styled.div`
  max-height: 200px;
  overflow-y: auto;
  padding-right: 1px;

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
