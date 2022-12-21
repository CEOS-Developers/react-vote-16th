import styled from 'styled-components';
import { ButtonProps } from '../../interfaces';
import { GRAY_1, BLACK_1 } from '../../styles/theme';

export function DefaultButton({
  content,
  width = '120px',
  onClick,
}: ButtonProps) {
  return (
    <ButtonWrapper name={content} onClick={onClick} width={width}>
      <span className='button'>{content}</span>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  height: 44px;
  background-color: ${GRAY_1};
  border-radius: 200px;
  color: ${BLACK_1};
`;
