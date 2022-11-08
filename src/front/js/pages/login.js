import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const handleClick = async () => {
    console.log("this is your token", store.token);
    await actions.login(email, password);
    if (store.token !== null && store.token !== undefined) {
      navigate("/private");
    }
  };

  return (
    <div className="m-auto w-50 my-3">
      <h1>Login</h1>
      {store.token && store.token != "" && undefined ? (
        ("you are logged with this token" + store.token, navigate("/private"))
      ) : (
        <div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleClick}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};
