import styled from "styled-components";
import { Link } from "react-router-dom";

const SmallBox = ({ text, link }: any) => {
  return (
    <>
      <Link to={link} style={{ textDecoration: "none" }}>
        {text == "투표하기" ? (
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
  justify-content: center;
  align-items: center;
  border: 3px #384084 solid;
  border-radius: 1rem;
  padding: 0.5rem 2.5rem;
  background-color: #384084;
  opacity: 0.5;
`;
const Text = styled.div`
  font-size: 1.2rem;
  color: #ffffff;
`;
