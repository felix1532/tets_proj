import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './pages/login/login-page';
import RegisterPage from './pages/register/register-page';
import HomePage from './pages/home/home-page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Firebase from './core/config/firebase-config';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './core/reducers/index';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import thunk from 'redux-thunk';
import ProfilePage from './pages/profile/profile-page';
import EditorPage from './pages/editor/components/editor-page';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App(): JSX.Element {
  const [login, setLogin] = useState<boolean>(true);

  useEffect(() => {
    Firebase.auth.onAuthStateChanged((user) => {
      if (!user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, [login]);
  console.log(login);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/home' component={HomePage} />
        {login && <Redirect to='/' />}
        <Route path='/profile' component={ProfilePage} />
        <Route path='/editor' component={EditorPage} />
      </Switch>
    </Router>
  );
}

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 4000,
  offset: '40px',
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <App />
      </Provider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
