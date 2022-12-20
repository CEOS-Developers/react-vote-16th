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
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTM5MjczLCJpYXQiOjE2NzE1Mzc0NzMsImp0aSI6IjU3ZjQyZTA1NjZlZDRhZjhhZjcxNDYyZTllMTk0NTZlIiwidXNlcl9pZCI6IjA5MDlvamUifQ.UwmCHrByZqwm3n68SNRzrJXio1gAyeR70Yiw9sfgF_A ',
});

export const isPartVote = atom<any>({
  key: 'isPartVote',
  default: false,
});
