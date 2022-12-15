import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";
import NavbarComponent from "../../containers/NavbarComponent";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <>
      <NavbarComponent />

      <div
        style={{
          marginLeft: "10%",
          maxWidth: "80%",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <Card style={{ width: "18rem" }}>
          <Card.Header>
            <h4>Cart Summary</h4>
          </Card.Header>

          <ListGroup className="list-group-flush">
            <ListGroup.Item>TOTAL:({totalItems} items)</ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>TOTAL PRICE:₹ {totalPrice}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to="/cart">
              <Button variant="warning">Proceed To Checkout</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
