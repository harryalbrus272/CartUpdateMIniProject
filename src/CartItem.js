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
    //This binding can be avoided by the arrow function
    //this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  increaseQuantity = () => {
    console.log("This is the increase test", this.state);
    //Shallow merging in place with the state variable
    this.setState({
      qty: this.state.qty + 1,
    });
  };
  decreaseQuantity = () => {
    console.log("This is the decrease test", this.state);
    if (this.state.qty > 0)
    //If previous state is required then follow this form
      this.setState((previous) => {
        return {
          qty: previous.qty - 1,
        };
      });
  };
  emptyQuantity = () => {
    console.log("This is the empty test", this.state);
    this.setState({
      qty: 0,
    });
  };

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
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://as2.ftcdn.net/jpg/03/30/24/99/500_F_330249927_k8oy0p4zZqSAdxd1jxlhB0ZPT3fGLpjw.jpg"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
              onClick={this.emptyQuantity.bind(this)}
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
