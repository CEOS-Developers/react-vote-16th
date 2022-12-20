import { atom } from 'recoil';

export const part = atom<string>({
  key: 'part',
  default: '',
});

export const name = atom<string>({
  key: 'name',
  default: '',
});

export const team = atom<string>({
  key: 'team',
  default: '',
});

export const token = atom<string>({
  key: 'token',
  default: '',
});
