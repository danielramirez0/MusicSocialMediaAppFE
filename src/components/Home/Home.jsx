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
            className="home-page-image"
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt="dive bar drum set"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="home-page-image"
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
      <div className="row row-cols-1">
        <div className="col">
          <h4 className="text-center">Reasons to be here</h4>
        </div>
      </div>
      <div className="row h500 w-100">
        <div className="col w-100 ">
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
                  src="https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                  className="d-block w-100 h500 carousel-image"
                  alt="test"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>DISCOVER</h5>
                  <p>Find something new!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                  className="d-block w-100 carousel-image"
                  alt="temp"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>RECOGNIZE</h5>
                  <p>Music is the source of life.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  className="d-block w-100 h500 carousel-image"
                  alt="alt"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>ENJOY</h5>
                  <p>Have fun making friends and finding new music.</p>
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
  );
};

export default Home;
