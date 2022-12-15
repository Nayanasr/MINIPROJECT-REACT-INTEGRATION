import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

// Redux
import { connect } from "react-redux";
import { addToCart } from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.imgURL} />
      <Card.Body>
        <Card.Text>{product.name}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <h6>price: </h6>
          <p>₹{product.price}</p>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to="/cart">
          <Button variant="warning" onClick={() => addToCart(product.id)}>
            Add to Cart
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
