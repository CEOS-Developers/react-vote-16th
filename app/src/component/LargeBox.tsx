import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LargeBox = ({ text1, text2, link }: any) => {
  return (
    <>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Box>
          <Text> {text1} </Text>
          <Text> {text2} </Text>
        </Box>
      </Link>
    </>
  );
};

export default LargeBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 25rem;
  border: 3px #384084 solid;
  border-radius: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;
  &:hover {
    background-color: #384084;
    font-color: #ffffff;
  }
`;
const Text = styled.div`
  font-size: 3rem;
  // font-weight: 600
  color: #242957;
  &:hover {
    color: #ffffff;
  }
`;
