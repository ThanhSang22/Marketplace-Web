import React from "react";
import logo from "../../assets/images/logo-colored.png";
import group1 from "../../assets/images/Group1.png";
import group from "../../assets/images/Group.png";
import US from "../../assets/images/us.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-body-secondary pt-5 pb-5 mt-5 text-center">
        <h5>Subscribe on our newsletter</h5>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="d-flex gap-3 w-25 mx-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
          ></input>
          <button type="button" class="btn btn-primary">
            Subscribe
          </button>
        </div>
      </div>
      <div class="text-start bg-white p-5 ">
        <div class="row row-cols-7">
          <div class="col-3 text-start">
            <img src={logo} />
            <p>
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <div class="container text-start">
              <div class="row row-cols-5">
                <FaFacebook class="col" />
                <FaTwitter />
                <FaLinkedin class="col" />
                <FaInstagramSquare class="col" />
                <FaYoutube class="col" />
              </div>
            </div>
          </div>
          <div class="col col-cols-5">
            <h6 class="row">About</h6>
            <div class="row">About Us</div>
            <div class="row">Find store</div>
            <div class="row">Categories</div>
            <div class="row">Blogs</div>
          </div>
          <div class="col col-cols-5">
            <h6 class="row">Partnership</h6>
            <div class="row">About Us</div>
            <div class="row">Find store</div>
            <div class="row">Categories</div>
            <div class="row">Blogs</div>
          </div>
          <div class="col col-cols-5">
            <h6 class="row">Information</h6>
            <div class="row">Help Center</div>
            <div class="row">Money Refund</div>
            <div class="row">Shipping</div>
            <div class="row">Contract Us</div>
          </div>
          <div class="col col-cols-5">
            <h6 class="row">For Users</h6>
            <div class="row">Login</div>
            <div class="row">Register</div>
            <div class="row">Settings</div>
            <div class="row">My Orders</div>
          </div>
          <div class="col col-cols-3">
            <h6>Get app</h6>
            <img src={group1} alt="" />
            <img src={group} alt="" className="mt-3" />
          </div>
        </div>
        <div className="d-flex justify-content-between pt-3 pe-3 ps-3 bg-body-secondary text-center mt-5">
          <p>© 2023 Ecommerce. </p>
          <div className="d-flex">
            <img src={US} alt="" style={{ height: 20 }} />
            <p className="ms-2">English </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
