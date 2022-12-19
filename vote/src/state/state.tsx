import { UserInfo } from '../interface/interfaces';
import { atom } from 'recoil';
import FrontUserList from '../json/front.json';
import BackUserList from '../json/back.json';

export const frontUserState = atom<UserInfo[]>({
  key: 'FrontList',
  default: FrontUserList.UserList,
});

export const backUserState = atom<UserInfo[]>({
  key: 'BackList',
  default: BackUserList.UserList,
});

export const voteState = atom<string>({
  key: 'voteNum',
  default: '999',
});

export const clickState = atom<string>({
  key: 'clickId',
  default: '999',
});
