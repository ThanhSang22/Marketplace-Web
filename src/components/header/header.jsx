import React from "react";
import "./header.css";
import logo from "../../assets/images/logo-colored.png";
import { MdAccountCircle, MdMessage } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-components d-flex border-bottom bg-white">
      <img src={logo} />
      <div className="header-search input-group w-50">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="form-control border-primary border border-2 w-50"
        />
        <select
          className="form-select form-control border-primary border border-2"
          aria-label="Default select example"
        >
          <option selected>All category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="d-flex gap-3">
        <div className="header-rigth">
          <MdAccountCircle />
          Profile
        </div>
        <div className="header-rigth">
          <MdMessage />
          Message
        </div>
        <div className="header-rigth">
          <IoMdHeart />
          Order
        </div>
        <div className="header-rigth">
          <FaShoppingCart />
          My Cart
        </div>
      </div>
    </div>
  );
};

export default Header;
