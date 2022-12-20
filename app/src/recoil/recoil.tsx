import { atom } from 'recoil';

export const part = atom<string>({
  key: 'devPart',
  default: 'none',
});
