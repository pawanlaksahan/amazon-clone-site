import React from 'react';
import './product.css'

export default function  Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>This is the book you can see</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>18.75</strong>

                </p>
                <div className='product_rating'>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src='https://artprojectsforkids.org/wp-content/uploads/2021/04/How-to-Draw-a-Book-.jpg'/>
            
        </div>
    )
}
