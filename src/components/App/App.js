import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Preferences from "../Preferences/Preferences";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
<<<<<<< HEAD
      <h1>Application Page</h1>
      <p>
        This is the page displayed after your login information has been
        accepted and you have a token stored in either localStorage or
        sessionStorage.
      </p>
=======
      <h1>Application Test</h1>
>>>>>>> a6d5da03260e150ab34a7cf54101ea1ad5852a57
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
