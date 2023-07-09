import React from "react";
import "./NavBarre.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

const NavBarre = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>

        <CustomLink to="/account">Account</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPatch = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPatch.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBarre;
