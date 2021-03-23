import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base>
      <center>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://previews.123rf.com/images/margostock/margostock1705/margostock170500031/78970218-set-of-stylish-winter-men-s-clothing-on-a-wooden-background-men-s-clothing-and-accessories-.jpg"
                alt="New York"
                width="1100"
                height="500"
              />
            </div>
            <div className="carousel-item ">
              <img
                src="https://wallup.net/wp-content/uploads/2016/05/02/65841-women-black_dress-748x468.jpg"
                alt="Chicago"
                width="1100"
                height="500"
              />
            </div>
            <div className="carousel-item ">
              <img
                src="https://previews.123rf.com/images/anntarankova/anntarankova2004/anntarankova200400093/145133206-children-s-dress-is-beautiful-tulle-and-lace-dress-up-party-wear-for-girls-princess-costume-peach-an.jpg"
                alt="Los Angeles"
                width="1100"
                height="500"
              />
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </center>
      <div class="m-5">
        <div class="row row-content">
          <div class="col-12">
            <div class="card card-body bg-dark">
              <blockquote class="blockquote">
                <p className="mb-0">
                  One is never over-dressed or under-dressed with a Little Black
                  Dress.
                </p>
                <footer className="blockquote-footer">Karl Lagerfeld</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-dark mt-5">
          <strong>Our collections</strong>
        </h3>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="mb-4 col-xs-5 col-sm-6 col-md-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
