import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import UserPage from './forUsing/components/userPage';
import PrivateRoute from './state/utils/privateRoute';
import userReducer from './state/reducer/userReducer';

<<<<<<< HEAD
// import 'fontsource-roboto';
import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { LoginPage } from './components/pages/Login';
import { LandingPage } from './components/pages/Landing';
=======
const store = createStore(userReducer, applyMiddleware(thunk, logger));

// import { ExampleListPage } from './components/pages/ExampleList';
// import { LoginPage } from './components/pages/Login';
// import { LandingPage } from './components/pages/Landing';
>>>>>>> a19d3ac53a996d6353fe42573a0f039694941f90

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/userpage" component={UserPage} />
        {/* <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} /> */}
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        {/* <Route path="/" exact component={() => <LandingPage />} />
      <Route path="/example-list" component={ExampleListPage} />
      <Route component={NotFoundPage} /> */}
      </Switch>
    </Router>
  );
}
