export interface UserInfo {
  part: string;
  userId: string;
  userName: string;
  teamName: string;
  voteNum: number;
}

export interface PropsInfo {
  id: string;
  onClick: React.MouseEventHandler;
  isClick: string;
}
