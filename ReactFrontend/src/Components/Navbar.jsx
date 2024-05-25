import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="fixedTopBar">
        <nav className="navbar   navbar-expand-lg navbar-light bg-secondary">
          <div className="ms-5 container-fluid ">
            <img src="./icon.png" alt="icon" style={{ height: "30px" }} />
            <a className="navbar-brand">HOME SHOPPY</a>
            <div className="ms-auto">
              <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
            </div>
            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto ">
                <a type="a" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Go to Admin"></a>
                {/* <li className="nav-item">
                    <a className="nav-link active " aria-current="page" href="/#linked_content">
                      Categories
                    </a>
                  </li> */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Sign-up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </header>
    </>
  );
}

export default Navbar;
