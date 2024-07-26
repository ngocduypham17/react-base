import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';
import HomePage from './pages/HomePage';
import PrivatePage from './pages/PrivatePage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import useAuth from './hooks/useAuth';
import useTheme from './hooks/useTheme';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('sidebarState');
    if (savedState) {
      setSidebarOpen(JSON.parse(savedState));
    }
  }, []);

  return (
    <ThemeProvider
      theme={{
        ...(theme === 'light' ? lightTheme : darkTheme),
        sidebarOpen: isSidebarOpen,
      }}
    >
      <GlobalStyle />
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/private"
            element={isAuthenticated ? <PrivatePage /> : <Navigate to="/" />}
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
