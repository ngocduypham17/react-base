import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>&copy; 2023 My App</p>
    </StyledFooter>
  );
};

export default Footer;
