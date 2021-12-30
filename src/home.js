import React from 'react';
import './home.css';
import Product from './product';

export default function  Home() {
    return (
        <div className='home'>
             <div className='home_container'>

                 <img  className='home_img' src='https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920'
                  alt=''/>
             </div>
             <div className='home_row'>
                 <Product/>
                 <Product/>
                 <Product/>

             </div>
             <div className='home_row'>

             </div>
             <div className='home_row'>

             </div>

            
        </div>
    )
}
