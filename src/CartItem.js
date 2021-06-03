import React, { Component } from "react";

export default class CartItem extends Component {
  constructor() {
    //We call super which will the constructor of the parent class - Component class
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
  }

  render() {
    const { price, title, qty, img } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src="" alt="" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777777" }}>Rs {price}</div>
          <div style={{ color: "#777777" }}>Qty : {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="https://as2.ftcdn.net/jpg/01/26/10/59/500_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://as2.ftcdn.net/jpg/03/30/24/99/500_F_330249927_k8oy0p4zZqSAdxd1jxlhB0ZPT3fGLpjw.jpg"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 100,
    width: 110,
    borderRadius: 4,
    background: "#cccccc",
  },
};
