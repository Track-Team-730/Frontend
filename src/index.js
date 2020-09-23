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
import UserPage from './components/pages/userPage';
import PrivateRoute from './state/utils/privateRoute';
import userReducer from './state/reducer/userReducer';
import NavBar from './components/common/navBar';
import { LoginPage } from './components/pages/Login';
import { LandingPage } from './components/pages/Landing';
import { SignUpPage } from './components/pages/SignUp';
const store = createStore(userReducer, applyMiddleware(thunk, logger));
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
      <NavBar />
      <Switch>
        <PrivateRoute path="/userpage" component={UserPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/" exact component={() => { 
     window.location.href = 'https://african-marketplace-730.netlify.app/'; 
     return null;
}} />
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