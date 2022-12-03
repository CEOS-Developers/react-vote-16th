import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Login from './page/Login';
import SignUp from './page/SignUp';

import PartMain from './page/part/PartMain';
import PartVote from './page/part/PartVote';
import PartResult from './page/part/PartResult';

import DemoMain from './page/demo/DemoMain';
import DemoVote from './page/demo/DemoVote';
import DemoResult from './page/demo/DemoResult';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/part" element={<PartMain />} />
        <Route path="/part/vote" element={<PartVote />} />
        <Route path="/part/result" element={<PartResult />} />

        <Route path="/demo" element={<DemoMain />} />
        <Route path="/demo/vote" element={<DemoVote />} />
        <Route path="/demo/result" element={<DemoResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
