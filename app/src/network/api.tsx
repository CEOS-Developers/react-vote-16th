import axios from 'axios';
import { USER_SERVER } from './config';
import { userInfo } from '../assets/interface';

export const signup = async (request: any) => {
  // console.log(request);

  const data = await axios
    .post(`${USER_SERVER}/vote/join/`, request)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(data);

  return data;
};
