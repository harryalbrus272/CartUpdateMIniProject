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
          title: "Watch",
          qty: 1,
          img: "",
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    console.log("Heyy please increase the quantity of the", product.title);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log("Heyy please decrease the quantity of the", product.title);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      products[index].qty -= 1;
      this.setState({
        products,
      });
    }
  };
  handleEmptyQuantity = (product) => {
    console.log("Heyy please empty the quantity of the");
    const { products } = this.state;
    const index = products.indexOf(product);
    const items = products.filter((_, ind) => ind !== index);
    console.log(items);
    this.setState({
      products: items,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((item, index) => (
          <CartItem
            key={index}
            product={item}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onEmptyCart={this.handleEmptyQuantity}
          />
        ))}
      </div>
    );
  }
}