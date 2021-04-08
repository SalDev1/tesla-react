import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages";
import SignIn from "./pages/signin";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Switch>
              <Router path="/signin" exact>
                <SignIn />
              </Router>
              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
