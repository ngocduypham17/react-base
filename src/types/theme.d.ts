import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary?: string;
      secondary?: string;
    };
    sidebarOpen: boolean;
  }
  export interface theme {
    colors: {
      background: string;
      text: string;
      primary?: string;
      secondary?: string;
    };
    sidebarOpen: boolean;
  }
  export interface toggleTheme {
    colors: {
      background: string;
      text: string;
      primary?: string;
      secondary?: string;
    };
    sidebarOpen: boolean;
  }
}
