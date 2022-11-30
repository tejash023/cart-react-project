import React from 'react';

const Navbar = (props) => {
  
  return(
    <div style = {styles.nav}>
      <div style = {styles.cartIconContainer}>
        <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/1170/1170678.png' alt='cart-icon' />
        <span style = {styles.cartCount}>4</span>
      </div>
    </div>
  )

}

const styles = {
  cartIcon: {
    height:32,
    marginRight: 40
  },
  nav:{
    height:70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer:{
    position: 'relative'
  },
  cartCount: {
    background:'yellow',
    borderRadius: '50%',
    padding:'1px 6px',
    position: 'absolute',
    right: 30,
    top: -5
  }

}

export default Navbar;