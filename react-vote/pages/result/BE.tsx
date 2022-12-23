import VoteResult from '../../components/VoteResult';
import { withRouter } from 'next/router';

const BEResult = ({ router: { query } }: any) => {
  console.log(query.vote_list);
    if(query.vote_list == undefined)
    {
      return(
        <></>
      )
    }
    else
    {
      const voteList = JSON.parse(query.vote_list);
      return <VoteResult {...voteList} />;
    }
  

};

export default withRouter(BEResult);
