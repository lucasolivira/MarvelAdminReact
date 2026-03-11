import styled from 'styled-components';

interface ContainerProps {
  $isDarkMode: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? '#343a40' : '#e9ecef'};
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#f8f9fa' : '#121212')};
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
