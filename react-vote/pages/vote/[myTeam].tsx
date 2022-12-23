import { withRouter } from 'next/router';
import { useState } from 'react';

import Candidate from '../../components/Candidate';

const Vote = ({ router: { query } }: any) => {
  console.log(query.vote_list);
  if (query.vote_list == undefined) {
    return <></>;
  } else {
    const voteList = JSON.parse(query.vote_list);

    return (
      <div className="container">
        <div className="title">FE 투표하기</div>
        <div className="content">
          {voteList.map((cand: any) => (
            <Candidate key={cand.id} {...cand} />
          ))}
        </div>
        <style jsx>{`
          .title {
            font-size: 1.25rem;
            font-weight: 600;
            padding: 1rem;
          }
          .container {
            display: flex;
            flex-direction: column;

            align-items: center;

            gap: 1rem;
          }
          .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem 1rem;
          }
        `}</style>
      </div>
    );
  }
};

export default withRouter(Vote);
