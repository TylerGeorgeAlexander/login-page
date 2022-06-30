import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

async function loginUser(credentials) {
  return fetch("https://ta-login-page-backend.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>
        {" "}
        This is a template login page. You could enter any character combination
        for a username and password to receive a token that directs to the next
        page.
        <br />
        Currently the template is programmed for localStorage.
        <br />
        <br />
        Changing between sessionStorage and localStorage allows different
        benefits, such as localStorage's ability to save data across windows. Unlike
        sessionStorage, localStorage will save data even after the session ends.
        This can be more convenient, since it lets users open multiple windows
        and tabs without a new login, but it does have some security problems.
        If the user shares their computer, they will remain logged in to the
        application even though they close the browser. It will be the user’s
        responsibility to explicitly log out. The next user would have immediate
        access to the application without a login. It’s a risk, but the
        convenience may be worth it for some applications.
      </p>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
