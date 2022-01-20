import React from 'react';
import './home.css';
import Product from './product';

export default function  Home() {
    return (
        <div className='home'>
             <div className='home_container'>

                 <img  className='home_img' src='https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920'
                  alt=''/>

                <div className='home_row'>
                 <Product id="123"
                          title='The Love Songs of W.E.B. Du Bois is the 2021 debut novel by American poet Honorée Fanonne Jeffers. '
                          price={32.232}
                          image="https://static01.nyt.com/images/2021/11/30/books/30TenBest-02/30TenBest-02-mobileMasterAt3x.jpg"
                          rating={3}/> 
                 <Product id="124"
                          title='Samsung Galaxy Note 10 is powered by a 1.9GHz octa-core Samsung Exynos 9825 processor that features 4 cores clocked at 1.9GHz, 2 cores clocked at 2.4GHz '
                          price={152.232}
                          image="https://www.samsung.com/global/galaxy/galaxy-note10/images/gallery/galaxy-note10_gallery-color_note10-c1-04.jpg"
                          rating={5}/> 
                  
                  
                 

                </div>
                 <div className='home_row'>
                <Product  id="125"
                          title='AccuView Display Strong Panel with Wide Viewing Angle HDR HDR is Supported. Built-in Google Assistant Your Personal Assistant will Control Smart Devices '
                          price={162.232}
                          image="https://www.kapruka.com/cdn-cgi/image/width=340,quality=93,f=auto/shops/specialGifts/productImages/1542613733278_PNSON-TH32F336M_M.jpg"
                          rating={4}/>
                <Product id="126"
                          title='Cherry prices and buy online, we have a wide range of Office FurnIture from Singer Furniture brand.'
                          price={82.232}
                          image="https://image.made-in-china.com/2f0j00PDCGlKaMrFqd/Simple-Desk-Wooden-Furniture-Laptop-Indoor-Office-Computer-Desk.jpg"
                          rating={4}/>
                <Product id="127"
                          title='Cherry prices and buy online, we have a wide range of Office FurnIture from Singer Furniture brand.'
                          price={32.22}
                          image="https://5.imimg.com/data5/RS/VR/GM/SELLER-29296573/bluetooth-headphones-500x500.jpg"
                          rating={3}/>

                </div>
                <div className='home_row'>
                <Product id="128"
                          title='Bedroom sets that help you sink into a goodnights sleep. Fully customizable single, double, queen or king size beds with superior craftsmanship.'
                          price={200.67}
                          image="https://i1.adis.ws/i/dreams/251-00322_main-shot_01_murphy-ottoman-bed-frame"
                          rating={4}/>

                </div>
             
            </div>

            
        </div>
    );
}
