import React, { Component } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        // {
        //   price: 999,
        //   title: "Phone",
        //   qty: 1,
        //   img: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80",
        // },
        // {
        //   price: 4000,
        //   title: "Laptop",
        //   qty: 1,
        //   img: "https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80",
        // },
        // {
        //   price: 99,
        //   title: "Watch",
        //   qty: 1,
        //   img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        // },
      ],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     snapshot.docs.map((doc) => console.log(doc.data()));
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });
    //     this.setState({
    //       products,
    //       loading: false,
    //     });
    //   });
    //Listener listening to the updates in the database
    this.db
      .collection("products")
      .where("price", "<=", 999)
      .where("title", "==", "Bag")
      .orderBy("price", "asc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((doc) => console.log(doc.data));
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products, loading: false });
      });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    //Now we wil increase the quantity in the firestore
    // products[index].qty += 1;
    // this.setState({
    //   products: products,
    // });

    //Getting the reference to the product
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("Updated succesfully");
      })
      .catch((err) => console.log(err));
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      // products[index].qty -= 1;
      // this.setState({
      //   products: products,
      // });

      //Adding firebase code to decrease the quantity on the database
      //Getting the reference to the product
      const docRef = this.db.collection("products").doc(products[index].id);
      docRef
        .update({
          qty: products[index].qty - 1,
        })
        .then(() => {
          console.log("Updated succesfully");
        })
        .catch((err) => console.log(err));
    }
  };
  handleEmptyQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // const items = products.filter((_, ind) => ind !== index);
    // this.setState({
    //   products: items,
    // });
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .delete()
      .then(() => {
        console.log("Updated succesfully");
      })
      .catch((err) => console.log(err));
  };
  //Function to calculate the total number of cart items
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  //Function to calculate the total price of the cart
  getCartTotal = () => {
    const { products } = this.state;
    let price = 0;
    products.map((product) => (price = price + product.qty * product.price));
    return price;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 100,
        qty: 3,
        title: "Washing Machine",
      })
      .then((docRef) => {
        console.log("Product has been added", docRef);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a Product
        </button>
        <h1>Cart</h1>
        {!loading && (
          <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onEmptyCart={this.handleEmptyQuantity}
          />
        )}
        {loading && <h1>Loading...</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}
