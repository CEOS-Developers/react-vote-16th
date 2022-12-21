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

export interface CandInfo {
  name: string;
  count: number;
}

export interface TeamInfo{
    team : string;
}