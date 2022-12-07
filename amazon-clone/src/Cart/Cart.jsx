import React from 'react'
import './Cart.css'
function Cart() {
  return (
      <div className='Cart'>
          <div className="cart-container">
              <div className="image">
                  <img className="cart-image" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" srcset="" />
              </div>
              <div className="cart-container2">
                  <h2 className='your-amazon-cart-is-empty'>Your Amazon Cart is Empty</h2>
                  
                  <a href="http://" target="_blank" rel="noopener noreferrer">Shop today's deals</a><br/>
                  
                  <button className='cart-sign-in' id='cart-sign-in'>Sign in to your account</button>
                  
                  <button className='cart-sign-in'>Sign up now</button>
              </div>
          </div>
          <div className="cart-store">
              
          </div>
          <div className="message">
              <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                 Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
          </div>
          
      </div>
  )
}

export default Cart