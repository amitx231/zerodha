import React from "react";

export default function Pricing() {
  return (
    <div className="container p-5">
      <div className="row align-items-center">

        <div className="col-5">
          <h3>Unbeatable pricing</h3>

          <p>
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="fs-5 text-decoration-none">
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-7">
          <div className="row">

            <div className="col d-flex align-items-center">
              <img
                src="/images/pricing0.svg"
                alt="₹0"
                style={{ width: "55%" }}
              />
              <p className="mb-0 mt-5 fs-6">
                Free account opening
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img
                src="/images/pricing0.svg"
                alt="₹0"
                style={{ width: "55%" }}
              />
              <p className="mb-0 mt-5 fs-6">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img
                src="/images/pricing20.svg"
                alt="₹20"
                style={{ width: "55%" }}
              />
              <p className="mb-0 mt-3 fs-6">
                Intraday and F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}