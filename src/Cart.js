import React from 'react';
import CartItem from './CartItems';

class Cart extends React.Component{

  constructor(){
    super();
    this.state = {
      products:[
        {
          price: 899,
          title: 'iPhone 13 Pro',
          qty: 1,
          img: '',
          id:1
        },
        {
          price: 7200,
          title: 'iPhone 12',
          qty: 5,
          img: '',
          id: 2
        },
        {
          price: 9987,
          title: 'Samsung S22+',
          qty: 10,
          img: '',
          id:3
        }
        
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    //console.log('product', product)
    const {products} = this.state;
    //.log('this.state', this.state);
    const index = products.indexOf(product);
    //console.log('index', index);

    //console.log('index qty',products[index].qty);

    
      products[index].qty += 1;
    
    

    this.setState({
      products
    })

  }

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

  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }
 
  render(){
    
    const { products } = this.state;
    return(
      <div className='cart'>
        {products.map((product) => {
          return (
            <CartItem 
              product = {product} 
              key= {product.id}
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity} 
              onDeleteProduct = {this.handleDeleteProduct}
            />
          )
        })}
        
      </div>
    )
  }
}


export default Cart;