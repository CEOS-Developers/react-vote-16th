import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Page/HomePage';
import SignInPage from './Page/SignInPage';
import SignUpPage from './Page/SignUpPage';
import Voting from './Page/voting';
import VoteResult from './Page/voteResult';
import Header from './components/Header';
import PrivateRouter from './components/privateRouter';
import PublicRouter from './components/publicRouter';
import NowVote from './Page/nowVote';
import TeamvotePage from './Page/TeamvotePage';
import TeamresultPage from './Page/TeamresultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PublicRouter><SignInPage /></PublicRouter>} />
        <Route path="/home" element={
        <PrivateRouter>
        <HomePage />
        </PrivateRouter>} />     
        <Route path="/signup" element={<PublicRouter><SignUpPage /></PublicRouter>} />
        <Route path="/voting" element={<PrivateRouter><Voting /></PrivateRouter>} />
        <Route path="/result" element={<PrivateRouter><VoteResult /></PrivateRouter>} />
        <Route path='/nowvote' element={<PublicRouter><NowVote/></PublicRouter>}/>
        <Route path='/teamresult' element={<PrivateRouter><TeamresultPage/></PrivateRouter>}/>
        <Route path='/teamvoting' element={<PrivateRouter><TeamvotePage/></PrivateRouter>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
