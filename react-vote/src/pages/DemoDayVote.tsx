import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import { Container } from '../components/elements/Wrapper';
import { BLACK_1 } from '../styles/theme';
import { VoteTarget } from '../components/Icons/VoteTarget';
import { DemoDayVoteTitle } from '../components/Icons/Title/DemoDayVoteTitle';
import { isTeamClickedState, votedTeamState } from '../states/DemoDayVotePage';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CheckButton } from '../components/Icons/Checkbutton';
import { accessTokenSelector, userState } from '../states/loginState';
import { demoDayVote } from '../api/vote';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function DemoDayVote() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useRecoilState(isTeamClickedState);
  const [votedTeam, setVotedTeam] = useRecoilState(votedTeamState);
  const [user, setUser] = useRecoilState(userState);
  const token = useRecoilValue(accessTokenSelector);

  useEffect(() => {
    if (token === '') {
      alert('로그인이 필요합니다');
      navigate('/login');
    }
  }, []);

  const onTargetButtonCick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;

    if (isClicked && name === votedTeam) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
      setVotedTeam(name);
    }
  };

  const onCheckButtonClick = () => {
    if (isClicked) {
      demoDayVote(votedTeam, token);
      navigate('/result/demo-day');
    } else return;
  };

  return (
    <Container>
      <Header />
      <Section>
        <DemoDayVoteTitle />
        <Column>
          <VoteTarget name="Pre:folio" onClick={onTargetButtonCick} />
          <VoteTarget name="Finble" onClick={onTargetButtonCick} />
          <VoteTarget name="Teample" onClick={onTargetButtonCick} />
          <VoteTarget name="diaMEtes" onClick={onTargetButtonCick} />
          <VoteTarget name="Recipeasy" onClick={onTargetButtonCick} />
        </Column>
      </Section>
      <ButtonWrapper>
        <CheckButton isClicked={isClicked} onClick={onCheckButtonClick} />
      </ButtonWrapper>
    </Container>
  );
}

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
  color: ${BLACK_1};

  & .main-1 {
    font-size: 72px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 40px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 65%;
  top: 58%;
`;
