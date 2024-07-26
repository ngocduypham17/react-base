import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const HomeContent: React.FC = () => {
  return (
    <Container>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page content.</p>
    </Container>
  );
};

export default HomeContent;
