import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isSignInState } from '../state/state';
import axios from 'axios';

const Header = () => {
  const [isSignIn, setIsSignIn] = useRecoilState<boolean>(isSignInState);
  axios.defaults.baseURL = 'http://3.38.123.37';
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (token !== null) setIsSignIn(true);
  //   else setIsSignIn(false);
  // }, [token]);

  // const signOutAPI = async () => {
  //   await axios
  //     .post('/api/auth/logout/', {
  //       headers: { Authorization: token },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setIsSignIn(false);
  //       localStorage.clear();
  //       alert('로그아웃 성공! 로그인 화면으로 이동합니다.');
  //       navigate('/'); //홈으로 가서 로그인하게 만들기
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       alert('로그아웃 실패');
  //     });
  // };
  const signOutAPI = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('part');
    navigate('/');
  }

  return (
    <HeaderContainer>
      {isSignIn === true ? (
        <Link to="/home">
          <Logo src={require('../Img/ceos.webp')} alt="CEOS" />
        </Link>
      ) : (
        <></>
      )}

      {/* {isSignIn === true ? (
        <SignBtn onClick={signOutAPI}>로그아웃</SignBtn>
        ) : (
          <></>
          )} */}
        {token !== null ? <SignBtn onClick={signOutAPI}>로그아웃</SignBtn> : <></>}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 130px;
  height: 50px;
  margin-bottom: 10px;
`;

const SignBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
`;

export default Header;
