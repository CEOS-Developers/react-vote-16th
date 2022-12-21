const ResultCandidate = (candidate: any) => {
  return (
    <div>
      <div>{candidate.name}</div>
      <div>{candidate.vote_count}</div>
      <style jsx>{``}</style>
    </div>
  );
};

export default ResultCandidate;
