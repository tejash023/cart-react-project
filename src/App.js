import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"

class App extends React.Component {

  //state
  constructor(){
    super();
    this.state = {
      products:[
        {
          price: 899,
          title: 'iPhone 13 Pro',
          qty: 1,
          img: 'https://m.media-amazon.com/images/I/61AwGDDZd3L._SL1500_.jpg',
          id:1
        },
        {
          price: 7200,
          title: 'iPhone 12',
          qty: 5,
          img: 'https://m.media-amazon.com/images/I/317JiGToz-L.jpg',
          id: 2
        },
        {
          price: 9987,
          title: 'Samsung S22+',
          qty: 10,
          img: 'https://m.media-amazon.com/images/I/71wGLBDEsvL._SX679_.jpg',
          id:3
        }
        
      ]
    }
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

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity} 
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:30}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}



export default App;
