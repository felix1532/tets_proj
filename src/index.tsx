import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LoginPage } from './pages/login/login-page';
import { RegisterPage } from './pages/register/register-page';
import { HomePage } from './pages/home/home-page';
import { ProfilePage } from './pages/profile/profile-page';
import { EditorPage } from './pages/editor/editor-page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Firebase from './core/config/firebase-config';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './core/reducers/index';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import thunk from 'redux-thunk';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { PrivateRoute } from './core/components/private-route/private-route';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function App(): JSX.Element {
  const [login, setLogin] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    Firebase.authentication.onAuthStateChanged((user) => {
      if (!user) {
        setLogin(true);
      } else {
        setUser(true);
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <PrivateRoute component={HomePage} user={user} path='/home' />
        <PrivateRoute component={ProfilePage} user={user} path='/profile' />
        <PrivateRoute component={EditorPage} user={user} path='/editor' />
        <Route path='*' exact={true} component={LoginPage} />
        {login && <Redirect to='/' />}
      </Switch>
    </Router>
  );
}

const options = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: '10px',
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
