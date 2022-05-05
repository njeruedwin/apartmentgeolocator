import React, { Component } from "react";
import "../css/card.css";

const Card = ({ apartment }) => {
  return (
    <div
      style={{
        color: "teal",
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div className="col-md-4 my-3">
          <div className="card-view">
            <div className="card-body">
              <div class="card-container">
                <div>
                  <div class="apartment">
                    <h1>{apartment.title}</h1>
                    <h2>Apartment Price: {apartment.price}</h2>
                    <p class="desc">{apartment.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/*The contact description */}
        <div className="col-md-4 my-3">
          <div className="card-view">
            <div className="card-body">
              <div class="contact-card-container">
                <div>
                  <div class="apartment ">
                    <div class="container desc">
                      <h1>{apartment.email}</h1>

                      <h1>{apartment.addressOne}</h1>

                      <h1>{apartment.addressTwo}</h1>

                      <h1>{apartment.phoneNumber}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
