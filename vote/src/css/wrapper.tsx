import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-flow: wrap;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ResultWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  
`;

export const VoteResultWrapper = styled.div`
  width: 600px;
  height: 550px;
  padding: 30px;
  background: #e9ecef;
  box-shadow: 0px 0px 8px gray;
  border-radius: 15px;
  text-align: center;
`;