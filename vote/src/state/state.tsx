import { UserInfo,TeamInfo } from '../interface/interfaces';
import { atom } from 'recoil';
import FrontUserList from '../json/front.json';
import BackUserList from '../json/back.json';
import TeamList from '../json/team.json';

export const frontUserState = atom<UserInfo[]>({
  key: 'FrontList',
  default: FrontUserList.UserList,
});

export const teamState = atom<TeamInfo[]>({
  key: 'FrontList',
  default: TeamList.TeamList
});

export const backUserState = atom<UserInfo[]>({
  key: 'BackList',
  default: BackUserList.UserList,
});

export const voteState = atom<string>({
  key: 'voteNum',
  default: '999',
});

export const teamVoteState = atom<string>({
  key: 'teamVoteNum',
  default: '999',
});

export const clickState = atom<string>({
  key: 'clickId',
  default: '999',
});

export const clickTeamState = atom<string>({
  key: 'clickId',
  default: '999',
});

export const voteNumState = atom<number[]>({
    key :'voteNumber',
    default : [],
})
export const isSignInState = atom<boolean>({
  key: 'isSignIn',
  default: false,
});

export const nameState = atom<string>({
  key: 'name',
  default: '세오스',
});

export const partState = atom<string>({
  key: 'part',
  default: 'Frontend',
});

export const tokenState = atom<string>({
  key: 'token',
  default: '',
});

export const clickbtnState = atom<string>({
    key : 'click',
    default : 'FE',
});