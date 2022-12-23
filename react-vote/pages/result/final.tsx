import TeamResult from '../../components/TeamResult';
import { withRouter } from 'next/router';

const Result = ({ router: { query } }: any) => {
  console.log(query.vote_list);
  if(query.vote_list == undefined)
  {
    return(
      <></>
    )
  }
  else{
    const voteList = JSON.parse(query.vote_list);
    return <TeamResult {...voteList} />;
  }

};

export default withRouter(Result);
