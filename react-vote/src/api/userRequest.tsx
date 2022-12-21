import { JoinProps, LoginProps } from '../interfaces';
import client from './client';

export const join = (props: JoinProps) => {
  return client
    .post('user/join/', {
      user_id: props.user_id,
      name: props.name,
      email: props.email,
      password: props.password,
      part: props.part,
      team: props.team,
      is_candidate: true,
    })
    .then((res) => res.data);
};

export const login = (props: LoginProps) => {
  return client
    .post('user/login/', {
      user_id: props.user_id,
      password: props.password,
    })
    .then((res) => res.data);
};
