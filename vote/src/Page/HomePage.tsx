import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdHowToVote } from 'react-icons/md';
import { FaVoteYea } from 'react-icons/fa';
import '../css/animation.css';
import { Slide, Fade } from 'react-awesome-reveal';
// import { useRecoilState } from 'recoil';
// import { isSignInState, nameState, partState } from '../state/state';

const HomePage = () => {
  // const [part, setPart] = useRecoilState<string>(partState);
  // const [name, setName] = useRecoilState<string>(nameState);
  const name = localStorage.getItem("name");
  const part = localStorage.getItem("part");

  return (
    <Fade>
      <HomeContainer>
        <h1>CEOS 운영진 선출 투표 🗳</h1>
        <Welcome>
          안녕하세요. {name}({part})님.
        </Welcome>
        <Slide direction="left">
          <BtnContainer>
            <Vote>
              {part === 'Frontend' ? (
                <Link to="/voting">
                  <Part id="hv">
                    <MdHowToVote style={{ marginRight: '10px' }} />
                    FE 투표하기
                  </Part>
                </Link>
              ) : (
                <Link to="/voting">
                  <Part id="hv">
                    <MdHowToVote style={{ marginRight: '10px' }} />
                    BE 투표하기
                  </Part>
                </Link>
              )}
            </Vote>
            <Link to="/result">
              <Part id="hv">
                <FaVoteYea style={{ marginRight: '10px' }} />
                FE 투표 결과
              </Part>
            </Link>
            <Link to="/result">
              <Part id="hv">
                <FaVoteYea style={{ marginRight: '10px' }} />
                BE 투표 결과
              </Part>
            </Link>
          </BtnContainer>
        </Slide>
      </HomeContainer>
    </Fade>
  );
};
const HomeContainer = styled.div`
  width: 800px;
  height: 550px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e9ecef;
  box-shadow: 0px 0px 8px gray;
  border-radius: 15px;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
const Part = styled.button`
  width: 200px;
  height: 60px;
  padding: 10px;
  background-color: orange;
  margin: 10px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const Vote = styled.div``;

const Welcome = styled.span`
  font-size: 30px;
`;

export default HomePage;
