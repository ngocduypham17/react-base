import React from 'react';
import styled from 'styled-components';
import ToggleThemeButton from '../common/ToggleThemeButton';
import useAuth from '../../hooks/useAuth';
import { FiSearch, FiUser } from 'react-icons/fi';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  border-radius: 5px;
  padding: 5px 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  color: inherit;
  margin-left: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`;

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <SearchBar>
        <FiSearch />
        <SearchInput type="text" placeholder="Search..." />
      </SearchBar>
      <ProfileContainer>
        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
        {isAuthenticated && (
          <ProfileIcon>
            <FiUser />
          </ProfileIcon>
        )}
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
