import React from 'react';
import styled from 'styled-components';

const TopBarContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  height: 80px;
  padding: 20px;
  background: white;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;  
  top: 0; 
  left: 0; 
  right: 0; 
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.10);
  border-radius: 50%;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: auto;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 8px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-radius: 6px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.50);
`;

const TopBar = ({children}) => {
  return(
    <TopBarContainer>
      <Logo />
      <Title>vigilant</Title>
      <Navigation>
        {children}
        <SearchInput type="search-text" placeholder="Search in site"/>
      </Navigation>
    </TopBarContainer>
  );
};

export default TopBar;
