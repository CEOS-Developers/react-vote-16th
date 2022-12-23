import { withRouter } from 'next/router';

import Team from '../../components/Team';

const Vote = ({ router: { query } }: any) => {
  console.log(query.vote_list);
    if(query.vote_list == undefined)
    {
      return(
        <></>
      )
    }
    else{
      const voteList = JSON.parse(query.vote_list);
      console.log(voteList);
      return (
        <div className="container">
          <div className="title">데모데이 투표하기</div>
          {voteList.map((team: any) => (
            <Team key={team.id} {...team} />
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
    }

  

  



};

export default withRouter(Vote);
