import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Voting from './pages/voting';
import { GlobalStyle } from './styles/global-style';
import VoteResult from './pages/voteResult';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Routes>
          <Route path="/voting" element={<Voting />} />
          <Route path="/result" element={<VoteResult />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
