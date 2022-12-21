import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Icons/Logo';
import { useNavigate } from 'react-router-dom';
import { DefaultButton } from './DefaultButton';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from '../../states/homePageState';
import { userState } from '../../states/loginState';

export function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [user, setUser] = useRecoilState(userState);

  const onClickLogoButton = () => {
    navigate('/');
  };

  const onClickCategoryButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const content = e.currentTarget.name.toLowerCase();
    if (content === 'logout') {
      setIsLoggedIn(false);
      setUser(logout);
      navigate('/');
    } else navigate(`/${content}`);
  };

  return (
    <Wrapper>
      <Logo onClick={onClickLogoButton} />
      <ContentWrapper>
        {isLoggedIn ? (
          <DefaultButton onClick={onClickCategoryButton} content='Logout' />
        ) : (
          <DefaultButton onClick={onClickCategoryButton} content='Login' />
        )}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100vw;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 40px;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const logout = {
  user: {
    user_id: '',
    name: '',
    part: '',
    team: '',
  },
  message: '',
  token: {
    access: '',
    refresh: '',
  },
};
