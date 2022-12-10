import styled from 'styled-components';
import { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [email, setEmail] = useState('');

  const [team, setTeam] = useState('TEAM');
  const [part, setPart] = useState('PART');

  const teamList = ['Finble', 'Pre:folio', 'diaMetes', 'recipeasy', 'Teample'];
  const partList = ['기획', '디자인', '프론트', '백엔드'];

  const [isTeam, setIsTeam] = useState(false);
  const [isPart, setIsPart] = useState(false);

  const clickRegister = () => {
    console.log(name, id, pw1, pw2, email);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Title> 회원가입 </Title>

        <form onSubmit={onSubmit}>
          <ModalBox>
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
              style={{ marginTop: '5rem' }}
              placeholder="이름"
            />
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setId(e.target.value)
              }
              value={id}
              placeholder="아이디"
            />
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPw1(e.target.value)
              }
              value={pw1}
              placeholder="비밀번호"
            />
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPw2(e.target.value)
              }
              value={pw2}
              placeholder="비밀번호 확인"
            />
            <Row>
              <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                value={email}
                placeholder="이메일 주소"
                style={{ width: '35rem' }}
              />
              <ConfirmButton> 인증 </ConfirmButton>
            </Row>

            <SmallText> 팀 명 / 파트 </SmallText>

            <Row>
              <Button
                onClick={() => {
                  if (!isPart) {
                    setIsTeam(!isTeam);
                  }
                }}
              >
                {team}
              </Button>
              <Button
                onClick={() => {
                  if (!isTeam) {
                    setIsPart(!isPart);
                  }
                }}
              >
                {part}
              </Button>
            </Row>

            <Row>
              {isTeam ? (
                <ToggleBox style={{ marginRight: '18.5rem' }}>
                  {teamList.map((item) => (
                    <ToggleItem
                      onClick={() => {
                        setTeam(item);
                        setIsTeam(!isTeam);
                      }}
                    >
                      {' '}
                      {item}
                    </ToggleItem>
                  ))}
                </ToggleBox>
              ) : (
                <></>
              )}

              {isPart ? (
                <ToggleBox style={{ marginLeft: '19.5rem' }}>
                  {partList.map((item) => (
                    <ToggleItem
                      onClick={() => {
                        setPart(item);
                        setIsPart(!isPart);
                      }}
                    >
                      {' '}
                      {item}
                    </ToggleItem>
                  ))}
                </ToggleBox>
              ) : (
                <></>
              )}
            </Row>

            {isTeam || isPart ? (
              <></>
            ) : (
              <Button
                onClick={clickRegister}
                style={{ width: '10rem', marginTop: '4rem' }}
              >
                가입하기
              </Button>
            )}
          </ModalBox>
        </form>
      </Container>
    </>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #384084;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  margin-right: 40rem;
  margin-bottom: 1rem;
  color: white;
  font-weight: 600;
`;

const SmallText = styled.div`
  color: #242957;
  margin-top: 2rem;
  margin-right: 35rem;
  font-size: 1.2rem;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 50rem;
  border-radius: 1rem;
  background-color: white;
`;

const Input = styled.input`
  width: 40rem;
  height: 3rem;
  font-size: 1.3rem;
  border: 1px black solid;
  border-radius: 0.8rem;
  margin-top: 2rem;
`;

const ConfirmButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 3rem;
  margin-left: 1rem;
  background-color: #384084;
  border-radius: 0.8rem;
  margin-top: 1.5rem;
  color: #ffffff;
  cursor: pointer;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 3rem;
  background-color: #384084;
  border-radius: 0.8rem;
  color: #ffffff;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  cursor: pointer;
`;

const ToggleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 1px black solid;
  width: 10rem;
  margin-top: 0.5rem;
`;

const ToggleItem = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;
