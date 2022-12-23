const ResultTeam = (team: any) => {
  return (
    <div className="team">
      <div>{team.team_name}</div>
      <div>{team.vote_count}</div>
      <style jsx>{`
        .team {
          display: flex;
          gap: 1rem;

          width: 30rem;
          padding: 1.5rem;

          border: 1px solid white;
          border-radius: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ResultTeam;
