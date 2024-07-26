import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding-left: ${props => (props.theme.sidebarOpen ? '250px' : '80px')};
    padding-top: 60px;  // Thêm khoảng cách cho header
    transition: padding-left 0.3s ease-in-out;
  }
`;

export default GlobalStyle;
