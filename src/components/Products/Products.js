import React from "react";

import { connect } from "react-redux";

import Product from "./Product/Product";
import NavbarComponent from "../../containers/NavbarComponent";
import CarouselComponent from "../../containers/CarouselComponent";

const Products = ({ products }) => {
  return (
    <>
      <NavbarComponent />
      <CarouselComponent />
      <div
        style={{
          marginLeft: "10%",
          maxWidth: "80%",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
