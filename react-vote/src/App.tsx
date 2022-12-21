import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import GlobalStyle from './styles/GlobalStyle';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PartLeaderResult } from './pages/PartLeaderResult';
import { DemoDayResult } from './pages/DemoDayResult';
import { PartLeaderVote } from './pages/PartLeaderVote';
import { DemoDayVote } from './pages/DemoDayVote';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vote/part-leader" element={<PartLeaderVote />} />
            <Route path="/vote/demo-day" element={<DemoDayVote />} />
            <Route path="/result/part-leader" element={<PartLeaderResult />} />
            <Route path="/result/demo-day" element={<DemoDayResult />} />
          </Routes>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
