import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const PrivateContent: React.FC = () => {
  return (
    <Container>
      <h2>Welcome to the Private Page</h2>
      <p>This content is only accessible after logging in.</p>
    </Container>
  );
};

export default PrivateContent;
