import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row bg-danger text-black">
      <Link className="flex-sm-fill text-sm-center nav-link " to="home">
        Home
      </Link>
      <Link className="flex-sm-fill text-sm-center nav-link" to="contact">
        Contact
      </Link>
      <Link className="flex-sm-fill text-sm-center nav-link" to="shop">
        shop
      </Link>
      <Link className="flex-sm-fill text-sm-center nav-link " to="name">
        Put name
      </Link>
    </nav>
  );
};
