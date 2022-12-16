import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Page/HomePage';
import SignInPage from './Page/SignInPage';
import SignUpPage from './Page/SignUpPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 화면은 로그인(/): SignInPage */}
        {/* 로그인 후 메인화면(/home): HomePage*/}
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
