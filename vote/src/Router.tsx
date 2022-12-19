import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Page/HomePage';
import SignInPage from './Page/SignInPage';
import SignUpPage from './Page/SignUpPage';
import Header from './Components/Header';
import Voting from './Page/voting';
import VoteResult from './Page/voteResult';

const Router = () => {
  return (
    <BrowserRouter>
    {/* Header는 로그인 상태일 때만 표시 */}
      {/* <Header /> */}
      <Routes>
        {/* 첫 화면은 로그인(/): SignInPage */}
        {/* 로그인 후 메인화면(/home): HomePage*/}
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
