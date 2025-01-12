import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import TopBar from '../components/layout/TopBar';
import BaseContainer from '../components/layout/BaseContainer';
import UserInfo from '../components/layout/UserInfo';
import SectionContainer from '../components/layout/SectionContainer';

import NavigationButton from '../components/common/NavigationButton';

const ManagerHome = () => {
  return (
    <BaseContainer>
      <TopBar>
        <NavigationButton label="Home" path="/ManagerHome"></NavigationButton>
      </TopBar> 
      <UserInfo/>
      <SectionContainer flexDirection="column" title="Projects">

      </SectionContainer>
    </BaseContainer>
  );
};

export default ManagerHome;