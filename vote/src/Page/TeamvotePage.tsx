import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const TeamvotePage = () => {
  const token = localStorage.getItem('token');

  axios.defaults.baseURL = 'http://3.38.123.37';
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const TeamresultAPI = async () => {
    await axios
      .put('/api/votes/teams', {        
            name : 'Teample',
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        alert('준비 중입니다.');
      });
  };

  useEffect(() => {
    TeamresultAPI();
  }, []);
  return <div></div>;
};

export default TeamvotePage;
