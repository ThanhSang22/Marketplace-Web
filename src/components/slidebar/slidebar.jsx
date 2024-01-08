import React from "react";
import "./slidebar.css";
import Banner from "../../assets/images/Banner.png";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function Slidebar() {
  return (
    <div className="Sidebar d-flex justify-content-between border border-1 rounded">
      <ul class="list-group p-2">
        <li>Automobiles</li>
        <li>Clothes and wear</li>
        <li>Home interiors</li>
        <li>Computer anh tech</li>
        <li>Tools, equipments</li>
        <li>Sports and outdoor</li>
        <li>Animal and pets</li>
        <li>Machinery tools</li>
        <li>More category</li>
      </ul>
      <img src={Banner} alt="" />
      <div className="">
        <div className="sidebar-info">
          <p className="acc">
            <MdOutlineAccountCircle />
            Hi, user <br /> let's get stated
          </p>
          <button type="button" class="btn btn-primary">
            Join now
          </button>
          <button type="button" class="btn btn-outline-primary">
            Log in
          </button>
        </div>
        <div>
          <p className="info">
            Get US $10 off <br /> with a new supplier
          </p>
          <p className="info bg-success">
            Send quotes with supplier preferences
          </p>
        </div>
      </div>
    </div>
  );
}
