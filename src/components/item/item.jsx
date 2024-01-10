import React from "react";
import "./item.css";
import vest from "../../assets/images/image30.png";
import jacket from "../../assets/images/jacket.png";
import earphone from "../../assets/images/earphone.jpg";

function Item() {
  return (
    <div class="row mt-5 row-cols-1 row-cols-md-5">
      <div class="col">
        <div class="card h-100">
          <img src={vest} class="card-img-top p-4" alt="..." />
          <div class="card-body">
            <p class="card-text">Brown winter coat medium size</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={jacket} class="card-img-top p-4" alt="..." />
          <div class="card-body">
            <h5 class="card-title">$10.30</h5>
            <p class="card-text"> Jeans shorts for men blue color</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={earphone} class="card-img-top p-5" alt="..." />
          <div class="card-body">
            <p class="card-text">Headser for gaming with mic</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={vest} class="card-img-top p-4" alt="..." />
          <div class="card-body">
            <p class="card-text">Brown winter coat medium size</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={jacket} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">$10.30</h5>
            <p class="card-text"> Jeans shorts for men blue color</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
