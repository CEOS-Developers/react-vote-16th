import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Voting from './pages/voting';
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Routes>
          <Route path="/voting" element={<Voting />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
