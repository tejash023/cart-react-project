import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';


class App extends React.Component {

  //state
  constructor(){
    super();
    this.state = {
      products:[],
      loading:true
    }
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
        

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id']= doc.id;
    //       return data;
    //     })

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })

    this.db
      .collection('products')
      .onSnapshot((snapshot) => {

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id']= doc.id;
          return data;
        })

        this.setState({
          products,
          loading: false
        })
      })
    }



  //to increase quantity
  handleIncreaseQuantity = (product) => {
    
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products
    })

  }

  //to decrease quantity
  handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty > 1){
      products[index].qty -= 1;
    }

    this.setState({
      products
    })
  }

  //to delete product
  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  //cart count
  getCartCount = () =>{
    const {products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  //total price
  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })

    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 900,
        qty: 22,
        title: 'Watch'
      })
      .then((docref) => {
        console.log('Product has been added',docref);
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <button onClick={this.addProduct}>Add Product</button>
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity} 
          onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h2>Loading Products...</h2>}
        <div style={{fontSize:20, padding:30}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}



export default App;
