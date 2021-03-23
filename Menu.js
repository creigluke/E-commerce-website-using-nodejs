import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "lightblue" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="navbar  bg-dark navbar-dark">
      <div className="ml-3">
        <img
          src="data:image/png;base64,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"
          alt="logo"
          style={{ width: "50px" }}
        />
      </div>
      <span className="text-white mr-auto ml-2 mt-2 logo">
        <h4>Dresser</h4>
      </span>

      <li className="nav-item  mr-2">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item  mr-2">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAuthenticated() && (
        <li className="nav-item  mr-2">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            U. Dashboard
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item  mr-2">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        </li>
      )}
      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item  mr-2">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item  mr-2">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAuthenticated() && (
        <li className="nav-item  mr-2">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
