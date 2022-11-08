import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const token = sessionStorage.getItem("token");
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        {!store.token ? (
          <div className="ml-auto">
            <Link to="/login">
              <button className="btn btn-primary">Log in</button>
            </Link>
          </div>
        ) : (
          <div className="ml-auto">
            <Link to="/login">
              <button
                onClick={() => actions.logout()}
                className="btn btn-primary"
              >
                Log out
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
