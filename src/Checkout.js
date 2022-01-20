import React from 'react';
import './Checkout.css'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
               
                <img className='checkout_img' src='https://tpc.googlesyndication.com/simgad/9948576260971395886?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qllFBd6AcvGe3L9wzV5gXxuxDfi-w'/>
                 
              <div className='checkout_title'>
                  <h2>Your Shopping Basket</h2>
                  
              </div>
               
            </div>
            <div className='checkout_right'>
                <Subtotal/>
               <h2>Your subtotal will go here</h2>
            </div>

            
            
        </div>
    )
}

export default Checkout

