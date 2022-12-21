import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { login } from '../api/userRequest';
import { IUserResponse, LoginProps } from '../interfaces';

const { persistAtom } = recoilPersist();

export const LoginState = atom<boolean>({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom<IUserResponse>({
  key: 'userState',
  default: {
    user: {
      user_id: '',
      name: '',
      part: '',
      team: '',
    },
    message: '',
    token: {
      access: '',
      refresh: '',
    },
  },
  effects_UNSTABLE: [persistAtom],
});

export const accessTokenSelector = selector({
  key: 'accessTokenSelector',
  get: ({ get }) => {
    const user = get(userState);
    const accessToken = user.token.access;
    return accessToken;
  },
});
