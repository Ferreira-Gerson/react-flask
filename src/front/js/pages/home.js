import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {store.token ? (
        <h1>Welcome Home!</h1>
      ) : (
        <div className="text-center mt-5">
          <h1>Welcome Home!</h1>
          <Link to="/login" className="me-5">
            <button className="btn btn-outline-primary"> Login </button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-outline-secundary">Signup</button>
          </Link>
        </div>
      )}
    </div>
  );
};
