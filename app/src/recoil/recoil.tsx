import { atom } from 'recoil';

export const part = atom<any>({
  key: 'part',
  default: '',
});

export const name = atom<any>({
  key: 'name',
  default: '',
});

export const team = atom<any>({
  key: 'team',
  default: '',
});

export const token = atom<any>({
  key: 'token',
  default: '',
});

export const isPartVote = atom<any>({
  key: 'partFlag',
  default: false,
});
