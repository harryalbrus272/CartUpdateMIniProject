import React, { Component } from "react";
import CartItem from "./CartItem";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
        },
        {
          price: 4000,
          title: "Laptop",
          qty: 1,
          img: "",
        },
        {
          price: 99,
          title: "Watcn",
          qty: 1,
          img: "",
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((item, index) => (
          <CartItem key={index} product={item} />
        ))}
      </div>
    );
  }
}
