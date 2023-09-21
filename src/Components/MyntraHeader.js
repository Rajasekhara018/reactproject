import React, { Component } from "react";
import logo from "../Myntra.logo";
export class MyntraHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light ms-5">
        <img
          src={logo}
          alt="myntra"
          width={50}
          className=" me-3 d-flex justify-content-start"
        />
        <p className="me-2">MEN</p>
        <p className="me-2">WOMEN</p>
        <p className="me-2">KIDS</p>
        <p className="me-2">HOME & LIVING</p>
        <p className="me-2">BEAUTY </p>
        <p className="me-2">STUDIO</p>
        <div className="input-group  col-4">
           <span className="bi bi-search"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for products,brands and more"
            aria-label="Search for products,brands and more"
            aria-describedby="basic-addon1"
          />
        </div>
        <p className="me-2">
          <span className="bi bi-person me-2"></span>Profile
        </p>
        <p className="me-2">
          <span className="bi bi-heart me-2"></span>Wishlist
        </p>
        <p className="me-5">
          <span className="bi bi-bag me-2"></span>Bag
        </p>
      </nav>
    );
  }
}

export default MyntraHeader;
