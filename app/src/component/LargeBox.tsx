import styled from "styled-components";
import { Link } from "react-router-dom";

const LargeBox = ({ text1, text2, link }: any) => {
  return (
    <>
      <Link to={link} style={{ textDecoration: "none" }}>
        <Box>
          {/* <Text> {text1} </Text>
          <Text> {text2} </Text> */}
          {text1} <br /> {text2}
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
  height: 18rem;
  width: 18rem;
  border: 3px #384084 solid;
  border-radius: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;

  text-align: center;
  font-size: 1.5rem;
  line-height: 3rem;
  color: black;

  &:hover {
    background-color: #384084;
    color: #ffffff;
  }
`;
const Text = styled.div`
  font-size: 3rem;
  color: #242957;
  &:hover {
    color: #ffffff;
  }
`;
