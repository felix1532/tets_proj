import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LoginPage } from './pages/login/login-page';
import { RegisterPage } from './pages/register/register-page';
import { HomePage } from './pages/home/home-page';
import { ProfilePage } from './pages/profile/profile-page';
import { EditorPage } from './pages/editor/components/editor-page';
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
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
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
        {user && <Route path='/home' component={HomePage} />}
        {user && <Route path='/profile' component={ProfilePage} />}
        {user && <Route path='/editor' component={EditorPage} />}
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

serviceWorker.unregister();
