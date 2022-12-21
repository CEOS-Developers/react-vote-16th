import { atom } from 'recoil';

export const isLeaderClickedState = atom<boolean>({
  key: 'isLeaderClicked',
  default: false,
});

export const votedLeaderState = atom<string>({
  key: 'votedLeader',
  default: '',
});
