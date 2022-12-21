import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ToggleSwitchProps } from '../../interfaces';
import { BLACK_1, GRAY_1, PURPLE_1 } from '../../styles/theme';

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const [part, setPart] = useState('프론트');

  useEffect(() => {
    props.isFrontend ? setPart('프론트') : setPart('백엔드');
  }, [props.isFrontend]);

  return (
    <Wrapper>
      <ToggleContainer onClick={() => props.setIsFrontend(!props.isFrontend)}>
        <div className={`toggle-container ${props.isFrontend ? 'toggle-checked' : null}`}>
          &nbsp;&nbsp;프론트&nbsp;&nbsp;&nbsp;&nbsp;백엔드&nbsp;
        </div>
        <div className={`toggle-circle ${props.isFrontend ? null : 'toggle-checked'}`}>{part}</div>
      </ToggleContainer>
    </Wrapper>
  );
};

export default ToggleSwitch;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const ToggleContainer = styled.div`
  position: relative;
  top: 90px;
  width: 100%;
  cursor: pointer;
  color: ${BLACK_1};
  font-size: 30px;
  line-height: 90px;
  text-align: center;
  > .toggle-container {
    width: 250px;
    height: 90px;
    border-radius: 50px;
    background-color: ${GRAY_1};
  }
  > .toggle-checked {
    color: ${BLACK_1};
    background-color: ${GRAY_1};
    left: 8rem;
    transition: 2s;
  }
  > .toggle-circle {
    color: ${BLACK_1};
    position: absolute;
    top: 0;
    width: 8rem;
    height: 90px;
    border-radius: 50px;
    background-color: ${PURPLE_1};
    transition: 2s;
  }
`;
