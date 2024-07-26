import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
  },
  sidebarOpen: false,
};

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081',
    background: '#ffffff',
    text: '#000000',
  },
  sidebarOpen: false,
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#333333',
    secondary: '#ff4081',
    background: '#000000',
    text: '#ffffff',
  },
  sidebarOpen: false,
};

export default {
  ...theme,
  light: lightTheme,
  dark: darkTheme,
};