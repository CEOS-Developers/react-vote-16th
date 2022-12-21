import { withRouter } from 'next/router';

import Candidate from '../../components/Candidate';

const Vote = ({ router: { query } }: any) => {
  const voteList = JSON.parse(query.vote_list);
  console.log(query.vote_list);
  return (
    <div className="container">
      <div className="title">FE 투표하기</div>
      {voteList.map((cand: any) => (
        <Candidate key={cand.id} {...cand} />
      ))}
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
      `}</style>
    </div>
  );
};

export default withRouter(Vote);
