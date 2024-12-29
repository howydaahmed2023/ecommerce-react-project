import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useGetUserCartQuery } from "../Redux/productApi";

const Navbar = () => {
  const { data } = useGetUserCartQuery();
  const [visibility, setVisibility] = useState(false);
  const [query, setQuery] = useState("");
  console.log(data);

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      // navigate(`/search?query=${query}`);
      navigate(`/search/{query}`);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
        <div className="container ">
          <NavLink className="navbar-brand fw-bold fs-4 text-warning prata-regular" to="/home">
            Collections
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <span className="me-3 ">
                <i
                  className="fa fa-search text-info fa "
                  aria-hidden="true"
                  onClick={() => setVisibility(!visibility)}
                ></i>
              </span>
              <NavLink to="/login" className="btn btn-outline-warning p-2">
                <i className="fa fa-sign-in me-1"></i> login
              </NavLink>
              <NavLink to="/signup" className="btn btn-outline-warning ms-3 p-2">
                <i className="fa fa-user-plus me-1"></i> signup
              </NavLink>
              {/* <NavLink href="#" className="btn btn-outline-warning ms-2 p-2 ">
                <i className="fa fa-shopping-cart me-1"></i>{" "}
                <span>({data.length})</span>
              </NavLink> */}
            </div>
          </div>
        </div>
      </nav>
      <form onSubmit={handleSearch}>
        <div
          className={`d-flex mt-2 justify-content-center mb-2 ${
            visibility ? "" : "invisible"
          }`}
        >
          <input
            type="search"
            className="form-control w-25 border border-dark bg-primary"
            placeholder="Search..........."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i
            class="fa fa-times ms-3 mt-2"
            aria-hidden="true"
            onClick={() => setVisibility(false)}
          ></i>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
