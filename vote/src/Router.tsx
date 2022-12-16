import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
