import React from 'react';

class CartItem extends React.Component{


  increaseQuantity = () =>{
    //setState re renders the compenent and do shallow merging
    //set state form 1 
    // this.setState({
    //   qty: this.state.qty + 1
    // })

    //set state form 2 - callback function
    this.setState((prevState) => {
      //console.log(prevState);
      return{
        qty: prevState.qty + 1
      }
    })
  }

  decreseQuantity = () =>{
    if(this.state.qty > 1 ){
      this.setState((prevState) => {
        return{
          qty: prevState.qty - 1
        }
      })
    }
    
  }
  render(){
    let {price, title, qty} = this.props.product;

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
              onClick={this.increaseQuantity}
            />
            <img 
              alt='decrease' 
              className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
              onClick={this.decreseQuantity} 
            />
            <img 
              alt='delete' 
              className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/512/2907/2907762.png' 
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