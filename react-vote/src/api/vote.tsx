import client from './client';

export const demoDayVote = (team: any, token: any) => {
  client
    .post(
      'vote/demo/',
      {
        team: team,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => alert(res.data));
};

export const partLeaderVote = (name: any, token: any) => {
  client
    .post(
      'vote/part/',
      {
        name: name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => alert(res.data));
};
