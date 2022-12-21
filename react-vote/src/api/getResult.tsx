import client from './client';

export const getDemoDayResult = () => {
  return client.get(`vote/result/demo/`).then((res) => res.data);
};

export const getPartLeaderResult = (part: string) => {
  return client.get(`vote/result/part/${part}`).then((res) => {
    return res;
  });
};
