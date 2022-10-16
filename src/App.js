import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { initStore } from './stores/store';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route>
          <LoginForm/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
