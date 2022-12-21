import TeamResult from '../../components/TeamResult';
import { withRouter } from 'next/router';

const Result = ({ router: { query } }: any) => {
  const voteList = JSON.parse(query.vote_list);
  return <TeamResult {...voteList} />;
};

export default withRouter(Result);
