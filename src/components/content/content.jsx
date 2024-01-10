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
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon from "../../assets/images/icon.png";
import AU from "../../assets/images/AU@2x.png";
import CN from "../../assets/images/CN@2x.png";
import DK from "../../assets/images/DK@2x.png";
import IT from "../../assets/images/IT@2x.png";
import RU from "../../assets/images/RU@2x.png";
import US from "../../assets/images/us.png";
// import { IoMdSearch } from "react-icons/io";

const TO = new Date().getTime() + 24 * 3600 * 1000 + 5000;
console.log("TO VALUE", TO);

const Content = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 70 }}>
      <div className=" d-flex border border-1 rounded bg-white">
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
      <div className="d-flex border border-1 rounded mt-5 justify-content-between bg-white">
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
      <div className="d-flex border border-1 rounded mt-5 justify-content-between bg-white">
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
      <div className=" content-bgr rounded bg-white">
        <div className="bg-opacity-50 rounded d-flex justify-content-around d-flex background">
          <div className="text-white w-25 text-start">
            <h3>An easy way to send requests to all suppliers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div class="bg-light p-5 d-flex row justify-content-start rounded w-50">
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
              <div class="mb-3 d-flex mt-2 gap-3 w-75">
                <input type="text" className="rounded border border-1" />
                <select class="form-select rounded border border-1"></select>
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
      <h4 className="pt-5 text-start">Our extra services</h4>
      <div className="content-serviece d-flex justify-content-between mt-3">
        <div class="card" style={{ width: `18rem` }}>
          <img src={img1} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text text-start">
              Source from <br />
              Industry Hubs
            </p>
          </div>
        </div>
        <div class="card" style={{ width: `18rem` }}>
          <img src={img2} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text text-start">
              Customize <br />
              Your Products
            </p>
          </div>
        </div>
        <div class="card" style={{ width: `18rem` }}>
          <img src={img3} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text w-75 text-start">
              Fast, reliable shipping by ocean or air
            </p>
          </div>
        </div>
        <div class="card" style={{ width: `18rem` }}>
          <img src={img4} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text text-start w-75">
              Product monitoring and inspection
            </p>
          </div>
        </div>
      </div>
      <h4 className="pt-5 text-start">Suppliers by region</h4>

      <div class="container text-center">
        <div class="row row-cols-5 mt-4">
          <div class="col d-flex gap-3 text-start" style={{ height: 20 }}>
            <img src={icon2} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
          <div class="col d-flex gap-3 text-start">
            <img src={US} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
          <div class="col d-flex gap-3 text-start">
            <img src={CN} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
          <div class="col d-flex gap-3 text-start">
            <img src={RU} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
          <div class="col d-flex gap-3 text-start">
            <img src={CN} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
        </div>
        <div class="row row-cols-5 mt-4">
          <div class="col d-flex gap-3 text-start" style={{ height: 20 }}>
            <img src={icon} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
          <div class="col d-flex gap-3 text-start">
            <img src={DK} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
          <div class="col d-flex gap-3 text-start">
            <img src={icon1} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
          <div class="col d-flex gap-3 text-start">
            <img src={RU} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
          <div class="col d-flex gap-3 text-start">
            <img src={IT} style={{ height: 20 }} />
            <div>
              <div>Arabic Emirates</div>
              <div className="text-body-tertiary">shopname.ae</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
