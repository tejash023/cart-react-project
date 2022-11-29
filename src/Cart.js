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
 
  render(){
    
    const { products } = this.state;
    return(
      <div className='cart'>
        {products.map((product) => {
          return (
            <CartItem 
              product = {product} 
              key= {product.id} 
            />
          )
        })}
        
      </div>
    )
  }
}


export default Cart;