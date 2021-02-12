import React, { Suspense } from 'react';
import NavBar from './containers/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './containers/ProtectedRoute';
// import { UserProvider } from './containers/UserContext';
import SignOut from './pages/SignOut';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const New = React.lazy(() => import('./pages/New'));
const SingleTweet = React.lazy(() => import('./pages/SingleTweet'));
const Profile = React.lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={['/login', '/signin']} component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signout" component={SignOut} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/new" component={New} />
            <Route path="/tweets/:id" component={SingleTweet} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
