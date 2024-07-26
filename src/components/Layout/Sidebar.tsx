import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiLock } from 'react-icons/fi';

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 60px;  // Đặt dưới header
  left: 0;
  height: calc(100% - 60px);  // Trừ đi chiều cao của header
  width: ${props => (props.isOpen ? '250px' : '80px')};
  background-color: ${props => props.theme.colors.primary};
  transform: translateX(0);
  transition: width 0.3s ease-in-out;
  z-index: 1000;
`;

const MenuButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 10px;
  left: ${props => (props.isOpen ? '220px' : '50px')};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  transition: left 0.3s ease-in-out;
`;

const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 80px 0 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 10px 20px;
  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 10px;
    white-space: nowrap;
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }
`;

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('sidebarState');
    if (savedState) {
      setIsOpen(JSON.parse(savedState));
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    localStorage.setItem('sidebarState', JSON.stringify(!isOpen));
  };

  return (
    <>
      <MenuButton onClick={toggleSidebar} isOpen={isOpen}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuButton>
      <SidebarContainer isOpen={isOpen}>
        <MenuItems>
          <MenuItem isOpen={isOpen}>
            <FiHome />
            {isOpen && <Link to="/">Home</Link>}
          </MenuItem>
          <MenuItem isOpen={isOpen}>
            <FiLock />
            {isOpen && <Link to="/private">Private Page</Link>}
          </MenuItem>
        </MenuItems>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
