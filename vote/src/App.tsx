import Router from './Router';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './css/GlobalStyle';


function App() {
  return (
    <div>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </div>
  );
}

export default App;
