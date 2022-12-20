import styled from 'styled-components';
import { useState } from 'react';
import { USER_SERVER } from '../config';

const SignUp = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [email, setEmail] = useState('');

  const [team, setTeam] = useState({ id: 2, name: 'finble' });
  const [part, setPart] = useState({ id: 'front', name: '프론트' });

  const teamList = [
    { id: 1, name: 'teample' },
    { id: 2, name: 'finble' },
    { id: 3, name: 'prefolio' },
    { id: 4, name: 'diametes' },
    { id: 5, name: 'recipeasy' },
  ];
  const partList = [
    { id: 'plan', name: '기획' },
    { id: 'design', name: '디자인' },
    { id: 'front', name: '프론트' },
    { id: 'back', name: '백' },
  ];

  const [isTeam, setIsTeam] = useState(false);
  const [isPart, setIsPart] = useState(false);

  const clickRegister = async () => {
    let request = {
      id: id,
      password: pw1,
      email: email,
      part: part.id,
      name: name,
      team: team.id,
    };

    console.log(request);

    fetch(`${USER_SERVER}/vote/join/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message == '가입이 성공적으로 이루어졌습니다') {
          alert(data.message);
          window.location.replace('/');
        } else if (data.email) {
          alert('user의 email이 이미 존재합니다.');
        } else if (data.id) {
          alert('user의 id가 이미 존재합니다.');
        }
      });
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
              type="password"
            />
            {pw1.length != 0 && pw1.length < 8 ? (
              <ErrorText>8자 이상의 비밀번호를 입력해주세요</ErrorText>
            ) : (
              <></>
            )}
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPw2(e.target.value)
              }
              value={pw2}
              placeholder="비밀번호 확인"
              type="password"
            />
            {pw2 != '' && pw1 != pw2 ? (
              <ErrorText>비밀번호가 다릅니다</ErrorText>
            ) : (
              <></>
            )}
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
                  setIsPart(false);
                  setIsTeam(!isTeam);
                }}
              >
                {team.name}
              </Button>
              <Button
                onClick={() => {
                  setIsPart(!isPart);
                  setIsTeam(false);
                }}
              >
                {part.name}
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
                      {item.name}
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
                      {item.name}
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
  height: 2.8rem;
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

const ErrorText = styled.div`
  color: #384084;
`;
