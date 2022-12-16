import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  //일단 frontend로 둠
  const [part, setPart] = useState('FE');
  const [name, setName] = useState('000');

  return (
    <HomeContainer>
      <h1>CEOS 운영진 선출 투표</h1>
      <span>
        안녕하세요. {name}({part})님.
      </span>
      <BtnContainer>
        <Vote>
          {part === 'FE' ? (
            <FEvote>{part} 투표하기</FEvote>
          ) : (
            <BEvote>{part} 투표하기</BEvote>
          )}
        </Vote>
        <FEresult>FE 투표 결과</FEresult>
        <BEresult>BE 투표 결과</BEresult>
      </BtnContainer>
    </HomeContainer>
  );
};
const HomeContainer = styled.div``;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FEvote = styled.button`
  width: 200px;
`;
const BEvote = styled.button`
  width: 200px;
`;
const Vote = styled.div``;
const FEresult = styled.button`
  width: 200px;
`;
const BEresult = styled.button`
  width: 200px;
`;

export default HomePage;
