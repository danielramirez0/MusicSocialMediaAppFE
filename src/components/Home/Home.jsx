import NavBar from "../NavBar/NavBar";
import React, { useState, useEffect } from "react";
import { AppContext } from "../../libs/contextLib";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid h-100 w-100">
      <div className="pb-5">
        <NavBar tabActive="0" />
      </div>
      <div className="row pt-8 center">
        <div className="col">
          <h1 className="text-center pt-6">Welcome to Music with Friends!</h1>
        </div>
        <div className="col">
          <img
            id="home-page-image"
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt="dive bar drum set"
          />
        </div>
        <div className="row">
          <div className="col">
            <img
              id="home-page-image"
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt="edh concert"
            />
          </div>
          <div className="col">
            <h3 className="text-center pt-6">
              The best source for a useless replacement of MySpace!
            </h3>
          </div>
        </div>
        <div className="col">
          <h4 className="text-center">Meet people!</h4>
        </div>

        <div className="row h500">
          <div className="col-12 ">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                    className="d-block w-100 h500"
                    alt="temp"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                    className="d-block w-100 h500"
                    alt="alt"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                    className="d-block w-100 h500"
                    alt="test"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
