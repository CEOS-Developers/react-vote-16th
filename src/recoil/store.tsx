import { atom } from 'recoil';

export const part = atom<any>({
  key: 'part',
  default: 'none',
});

export const name = atom<any>({
  key: 'name',
  default: 'none',
});

export const team = atom<any>({
  key: 'team',
  default: 'none',
});

export const token = atom<any>({
  key: 'token',
  default: 'none',
});

export const isPartVote = atom<any>({
  key: 'isPartVote',
  default: false,
});
