import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/home/HomePage";
import Authenticate from "./pages/authenticate/Authenticate";
import Activate from "./pages/activate/Activate";
import Rooms from "./pages/rooms/Rooms";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <ProtectedRoute exact path="/">
            <HomePage />
          </ProtectedRoute>
          <ProtectedRoute path="/authenticate">
            <Authenticate />
          </ProtectedRoute>

          <SemiProtectedRoute path="/activate">
            <Activate />
          </SemiProtectedRoute>
        </Switch>

        <PrivateRoute path="/rooms">
          <Rooms />
        </PrivateRoute>
      </Router>
    </div>
  );
}
const ProtectedRoute = ({ children, ...props }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Route
      {...props}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
};
const SemiProtectedRoute = ({ children, ...props }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  return (
    <Route
      {...props}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
const PrivateRoute = ({ children, ...props }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  return (
    <Route
      {...props}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          <Redirect
            to={{
              pathname: "/activate",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
};

export default App;
