import styled from 'styled-components';

interface ContainerProps {
  $isDarkMode: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-end;
  height: 40%;
  align-items: center;
  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? '#343a40' : '#e9ecef'};
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#f8f9fa' : '#121212')};
  padding: 0px 14px;
`;
