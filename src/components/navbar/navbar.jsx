import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="ps-5 pe-5 border-bottom d-flex justify-content-between bg-white">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link text-black" aria-current="page" href="#">
            All category
          </a>
        </li>
        <li class="nav-item">
          <a className="nav-link text-black " href="#">
            Hot offers
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#">
            Gift boxes
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#">
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#">
            Menu item
          </a>
        </li>
        <li class="nav-item dropdown text-black">
          <a
            class="nav-link dropdown-toggle text-black"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Help
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="nav ">
        <li class="nav-item dropdown ">
          <a
            class="nav-link dropdown-toggle text-black"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            English, USD
          </a>
          <ul class="dropdown-menu text-black">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown text-black">
          <a
            class="nav-link dropdown-toggle text-black"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Ship to
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
