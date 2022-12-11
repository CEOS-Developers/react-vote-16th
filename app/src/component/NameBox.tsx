import styled from "styled-components";

interface text {
  fontsize?: number;
  width?: number;
  fontWeight?: number;
}

const NameBox = ({ name, teamName, teamDesc, text, color, bgColor }: any) => {
  return (
    <Box style={{ color: color, background: bgColor }}>
      {text == "person" ? (
        <>
          <Text> {teamName} </Text>
          <Text fontsize={1.2} fontWeight={900}>
            {" "}
            {name}{" "}
          </Text>
        </>
      ) : (
        <Text> {text} </Text>
      )}
    </Box>
  );
};

export default NameBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  border: 3px #384084 solid;
  border-radius: 1rem;

  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;

  &:hover {
    background-color: #384084;
    color: #ffffff;
  }
`;

const Text = styled.div<text>`
  font-size: ${(props) => props.fontsize || 1}rem;
  width: ${(props) => props.width || 10}rem;
  font-weight: ${(props) => props.fontWeight || 500};
`;
