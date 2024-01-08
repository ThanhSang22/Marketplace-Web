import React from "react";
import "./content.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./content.css";
import laptop from "../../assets/images/laptop.png";
import countdownt from "../../assets/images/coundown.png";
import watch from "../../assets/images/smartwatch.jpg";
import camera from "../../assets/images/camara.jpg";
import earphone from "../../assets/images/earphone.jpg";
import phone from "../../assets/images/phone.jpg";
import Item from "../item/item";

const TO = new Date().getTime() + 24 * 3600 * 1000 + 5000;
console.log("TO VALUE", TO);

const Content = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 70 }}>
      <div className=" d-flex border border-1 rounded ">
        <div
          style={{ borderRadius: 2, width: "25%" }}
          className="p-3 border-end"
        >
          {/* <FlipClockCountdown
          to={TO}
          className="flip-clock"
          style={{ borderRadius: 2, background: "gray" }}
        /> */}
          <img src={countdownt} alt="" />
        </div>
        <div className="d-flex ">
          <div className="sale-item border-end">
            <img src={watch} alt="" />
            <p className="mt-3">Smart watches</p>
            <p className="bg-danger rounded-4 w-50 mb-0 text-white">-25%</p>
          </div>

          <div className="sale-item border-end">
            <img src={laptop} alt="" />
            <p className="mt-3">Laptops</p>
            <p className="bg-danger rounded-4 w-50 mb-0 text-white">-15%</p>
          </div>

          <div className="sale-item border-end">
            <img src={camera} alt="" />
            <p className="mt-3">GoPro cameras</p>
            <p className="bg-danger rounded-4 w-50 mb-0 text-white">-40%</p>
          </div>

          <div className="sale-item border-end">
            <img src={earphone} alt="" />
            <p className="mt-3">Headphones</p>
            <p className="bg-danger rounded-4 w-50 mb-0 text-white">-25%</p>
          </div>

          <div className="sale-item">
            <img src={phone} alt="" />
            <p className="mt-3">Canon camreras</p>
            <p className="bg-danger rounded-4 w-50 mb-0 text-white">-15%</p>
          </div>
        </div>
      </div>
      <div className="d-flex border border-1 rounded mt-5 justify-content-between">
        <div className="section-sale">
          <h6>Consumer electronics and gadgets</h6>
          <button type="button" class="btn btn-light">
            Source now
          </button>
        </div>
        <div>
          <div className="d-flex border-bottom">
            <div class="row border-end text-start p-3 ">
              <div class="col-md-8 text-start">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={watch} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 border-end text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={camera} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 border-end text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={laptop} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={earphone} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div class="row border-end text-start p-3 ">
              <div class="col-md-8 text-start">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={watch} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 border-end text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={camera} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 border-end text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={laptop} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={earphone} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex border border-1 rounded mt-5 justify-content-between">
        <div className="section-sale1">
          <h6>Consumer electronics and gadgets</h6>
          <button type="button" class="btn btn-light">
            Source now
          </button>
        </div>
        <div>
          <div className="d-flex border-bottom">
            <div class="row border-end text-start p-3 ">
              <div class="col-md-8 text-start">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={watch} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 border-end text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={camera} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 border-end text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={laptop} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={earphone} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div class="row border-end text-start p-3 ">
              <div class="col-md-8 text-start">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={watch} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 border-end text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={camera} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 border-end text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={laptop} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div class="row g-0 text-start p-3">
              <div class="col-md-8">
                <div>
                  <p>Laptops $ PC</p>
                  <p className="text-body-tertiary">
                    From <br />
                    USD 340
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={earphone} class="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" content-bgr rounded">
        <div className="bg-opacity-50 rounded d-flex justify-content-around d-flex background">
          <div className="text-white w-25 text-start">
            <h3>An easy way to send requests to all suppliers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div class="bg-light p-5 d-flex row justify-content-start rounded">
            <form className="form rounded">
              <p>Send quote to suppliers</p>
              <div className="d-flex row mt-4">
                <input type="text" className="rounded border border-1" />
                <input
                  type="text"
                  className="mt-2 rounded border border-1"
                  style={{ height: 50 }}
                />
              </div>
              <div class="mb-3 d-flex mt-2 gap-3 ">
                <input type="text" className="rounded border border-1" />
                <select
                  id="disabledSelect"
                  class="form-select rounded border border-1"
                ></select>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                style={{ width: "fit-content" }}
              >
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-start">Recommended items</h4>
        <div className=" d-flex flex-wrap justify-content-between">
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Content;
