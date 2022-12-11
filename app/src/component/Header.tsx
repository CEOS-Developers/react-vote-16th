import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  let login = false;
  let team = "FINBLE";
  let part = "FE";
  let name = "오지은";

  let state = team + " " + part + " " + name;

  return (
    <Container>
      <Link to="/">
        <Logo src="/ceos.png" alt="Logo" />
      </Link>

      <ButtonContainer>
        {login ? (
          <>
            <Text>{state}</Text>
            <Button>로그아웃</Button>
          </>
        ) : (
          <>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Button>로그인</Button>
            </Link>
            <Link to={"/signUp"} style={{ textDecoration: "none" }}>
              <Button>회원가입</Button>
            </Link>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Header;

const Logo = styled.img`
  width: 130px;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #384084;
  border-radius: 2rem;
  font-size: 0.8rem;

  &:hover {
    background-color: #384084;
    color: white;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-size: 1.6rem;
  margin-top: 0.4rem;
`;
