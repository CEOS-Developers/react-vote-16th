import ResultCandidate from './ResultCandidate';

const VoteResult = (voteList: any) => {
  console.log(voteList);
  const sortList = Object.values(voteList).sort(
    (a: any, b: any) => b.vote_count - a.vote_count
  );
  return (
    <div className="container">
      <div className="title">결과보기</div>
      <div className="content">
        {sortList.map((cand: any) => (
          <ResultCandidate key={cand.id} {...cand} />
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
};

export default VoteResult;
