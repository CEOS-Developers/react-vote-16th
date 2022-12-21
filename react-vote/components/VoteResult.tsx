import ResultCandidate from './ResultCandidate';

const VoteResult = (voteList: any) => {
  console.log(voteList);
  return (
    <div className="container">
      <div className="title">결과보기</div>
      {Object.values(voteList)
        .sort((a: any, b: any) => b.vote_count - a.vote_count)
        .map((cand: any) => (
          <ResultCandidate key={cand.id} {...cand} />
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

export default VoteResult;
