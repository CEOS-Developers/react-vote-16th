import { CheckButtonProps } from '../../interfaces';

export function CheckButton({ isClicked, onClick }: CheckButtonProps) {
  return (
    <button onClick={onClick}>
      <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M161.266 110.396C163.278 94.2212 186.722 94.2212 188.734 110.396V110.396C190.06 121.056 202.496 126.207 210.971 119.607V119.607C223.831 109.592 240.408 126.169 230.393 139.029V139.029C223.793 147.504 228.944 159.94 239.604 161.266V161.266C255.779 163.278 255.779 186.722 239.604 188.734V188.734C228.944 190.06 223.793 202.496 230.393 210.971V210.971C240.408 223.831 223.831 240.408 210.971 230.393V230.393C202.496 223.793 190.06 228.944 188.734 239.604V239.604C186.722 255.779 163.278 255.779 161.266 239.604V239.604C159.94 228.944 147.504 223.793 139.029 230.393V230.393C126.169 240.408 109.592 223.831 119.607 210.971V210.971C126.207 202.496 121.056 190.06 110.396 188.734V188.734C94.2212 186.722 94.2212 163.278 110.396 161.266V161.266C121.056 159.94 126.207 147.504 119.607 139.029V139.029C109.592 126.169 126.169 109.592 139.029 119.607V119.607C147.504 126.207 159.94 121.056 161.266 110.396V110.396Z"
          fill={isClicked ? '#DAD0E7' : '#DCDCDC'}
        />
        <path d="M153 177L173 200L196 149" stroke="white" stroke-width="5" stroke-linejoin="round" />
      </svg>
    </button>
  );
}
