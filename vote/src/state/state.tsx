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

export const clickbtnState = atom<Boolean>({
    key : 'click',
    default : true
});