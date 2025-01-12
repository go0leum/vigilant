import React, { useContext} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import defaultAvatar from '../../assets/image/default-avatar.jpg';

import ButtonContainer from './ButtonContainer';

import Button from '../common/Button'

const StyledUserInfoContainer = styled.div`
  width: 100%;
  height: 220px;
  padding: 60px 170px;
  background: rgba(0, 0, 0, 0.60);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(216.75, 216.75, 216.75, 0.50);
  border-radius: 50%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: inline-flex;
`;

const Title = styled.div`
  align-self: stretch;
  color: white;
  font-size: 24px;
  font-family: 'NanumSquare';
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
`;

const LabelNormal = styled.div`
  padding: 2px 4px;
  background: rgba(216.75, 216.75, 216.75, 0.50);
  border-radius: 2px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 2px;
  display: flex;
`;

const LabelText = styled.div`
  color: black;
  font-size: 12px;
  font-family: 'NanumSquare';
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
`;

const UserInfo = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const imageUrl = user.imageUrl || defaultAvatar;
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <StyledUserInfoContainer>
      <Avatar imageUrl={imageUrl} />
      <Container>
        <Title>{user.name}</Title>
        <LabelNormal>
          <LabelText>{user.jobType}</LabelText>
        </LabelNormal>
      </Container>
      <ButtonContainer>
        <Button label="Edit Profile" primary onClick={() => navigateTo('/EditProfile')}></Button>
        <Button label="Log Out" primary onClick={handleLogout}></Button>
      </ButtonContainer>
    </StyledUserInfoContainer >
    );
};

export default UserInfo;