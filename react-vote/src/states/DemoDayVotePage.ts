import { atom } from 'recoil';

export const isTeamClickedState = atom<boolean>({
  key: 'isTeamClicked',
  default: false,
});

export const votedTeamState = atom<string>({
  key: 'votedTeam',
  default: '',
});
