import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Page/HomePage';
import SignInPage from './Page/SignInPage';
import SignUpPage from './Page/SignUpPage';
import Voting from './Page/voting';
import VoteResult from './Page/voteResult';
import Header from './components/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/result" element={<VoteResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
