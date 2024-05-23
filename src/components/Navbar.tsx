import React from "react";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="PricingList">Pricing</a>
              <ul className="p-2">
                <li>
                  <a href="PricingList">Silver</a>
                </li>
                <li>
                  <a href="PricingList">Gold</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="AboutUs">About Us</a>
            </li>
            <li>
                <a href="ServicesPage">Services</a>
            </li>
            <li>
                <a href="Contact">Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Sahayak</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <details>
              <summary>Pricing</summary>
              <ul className="p-2">
                <li>
                  <a href="PricingList">Silver</a>
                </li>
                <li>
                  <a href="PricingList">Gold</a>
                </li>
                <li>
                  <a href="PricingList">Premium</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="AboutUs">AboutUs</a>
          </li>
          <li>
            <a href="ServicesPage">Services</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn mx-2" href="Login">Login</a>
        <a className="btn" href="SignUp">Register</a>
      </div>
    </div>
  );
}

export default Navbar;
