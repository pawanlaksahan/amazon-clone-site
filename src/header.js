import React from 'react';
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from '@material-ui/core';
 

function Header() {
    return (
        <div className='header'>
            <a href ='/'>
            <img className='header_logo'
          src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png "
          />
            </a>
        
    
        <div className='header_search'>
            <input className='header_input' type='text'/>
            <SearchIcon className='header_search_Icon'/>
        </div>
        <div className='header_option'>
            <span className='header_option_one'>
                Hello 
            </span>
            <span className='header_option_two'>
                Sign in 
            </span>

        </div>
        <div className='header_option'>
           <span className='header_option_one'>
                Return 
            </span>
            <span className='header_option_two'>
                & Orders 
            </span>


        </div>
        <div className='header_option'>
           <span className='header_option_one'>
                Your
            </span>
            <span className='header_option_two'>
                Prime
            </span>

        </div>
        <a href='/Checkout'>
        <div className='header_optionBasket'>
            <ShoppingBasket />
            <span className='header_optionTwo header_basketCount'>0</span>
        </div>
        </a>
        
        



        </div>
      
    )
}

export default Header
