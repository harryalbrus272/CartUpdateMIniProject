import React, { Component } from "react";
import CartItem from "./CartItem";

export default class Cart extends Component {
  render() {
    const { products, onIncreaseQuantity, onDecreaseQuantity, onEmptyCart } =
      this.props;
    return (
      <div className="cart">
        {products.map((item) => (
          <CartItem
            key={item.id}
            product={item}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onEmptyCart={onEmptyCart}
          />
        ))}
      </div>
    );
  }
}
