import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SmallBox = ({ text, link }: any) => {
  return (
    <>
      <Link to={link} style={{ textDecoration: 'none' }}>
        {text == '투표하기' ? (
          <Box style={{ opacity: 1 }}>
            <Text> {text} </Text>
          </Box>
        ) : (
          <Box>
            <Text> {text} </Text>
          </Box>
        )}
      </Link>
    </>
  );
};

export default SmallBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 20rem;
  border: 3px #384084 solid;
  border-radius: 1rem;
  margin-left: 7.5rem;
  margin-right: 7.5rem;
  margin-bottom: 3rem;
  background-color: #384084;
  opacity: 0.5;
`;
const Text = styled.div`
  font-size: 2rem;
  color: #ffffff;
`;
