const ResultCandidate = (candidate: any) => {
  return (
    <div className="candidate">
      <div>{candidate.name}</div>
      <div>{candidate.vote_count}</div>
      <style jsx>{`
        .candidate {
          display: flex;
          justify-content: space-between;

          width: 10rem;
          padding: 1.5rem;

          border: 1px solid white;
          border-radius: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ResultCandidate;
