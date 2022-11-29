import React from 'react';

class CartItem extends React.Component{
  render(){
    let {price, title, qty} = this.props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = this.props;

    return(
      <div className = "cart-item">
        <div className = "left-block">
          <img style={styles.image}/>
        </div>
        <div className='right-block'>
          <div style={{fontSize:25}}>{title}</div>
          <div style={{color:'#777'}}>Rs {price}</div>
          <div style={{color:'#777'}}>Qty: {qty}</div>
          <div className='cart-item-actions'>
            {/* Buttons */}
            <img 
              alt='increase'
              className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
              onClick={() => onIncreaseQuantity(product)}
            />
            <img 
              alt='decrease' 
              className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
              onClick={() => onDecreaseQuantity(product)} 
            />
            <img 
              alt='delete' 
              className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/512/2907/2907762.png'
              onClick = {() => onDeleteProduct(product.id)} 
            />

          </div>
        </div>

      </div>
    )
  }
}

const styles = {
  image:{
    height: 110,
    width: 110,
    borderRadius: 5,
    backgroundColor: '#ccc'
  }
}

export default CartItem;