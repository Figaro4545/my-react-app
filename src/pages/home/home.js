import React from 'react';
import Turkin from './images/Turkin.png';
import Cher from './images/cher_pl.png';
import Kr from './images/kr_pl.png';
import Sin from './images/sin_pl.png';
import Zel from './images/zel_pl.png';
import './home.css';




export default class HomePage extends React.Component {

    render() {
        return (
            <div className='block-product'>
                <div className='product'>
                    <div class="product-item">
                    <img src={Cher}  alt='' title='' />
                    <div class='product-list'>
                        <h3>Маленькое черное платье</h3>
                        <span class='price'>₽ 1000</span>
                        <a href='...' class='button' onClick={handleClick()}>В корзину</a>
                    </div>                               
                    </div>

               <div class="product-item">
                    <img src={Kr} alt='' title='' />
                    <div class='product-list'>
                        <h3>Маленькое красное платье</h3>
                        <span class='price'>₽ 2000</span>
                        <a href='...' class='button'>В корзину</a>
                    </div>
                               
               </div>  
               <div class="product-item">
                    <img src={Sin} alt='' title='' />
                    <div class='product-list'>
                        <h3>Маленькое синее платье</h3>
                        <span class='price'>₽ 3000</span>
                        <a href='...' class='button'>В корзину</a>
                    </div>
                               
               </div>  
               <div class="product-item">
                    <img src={Zel} alt='' title='' />
                    <div class='product-list'>
                        <h3>Маленькое зеленое платье</h3>
                        <span class='price'>₽ 4000</span>
                        <a href='...' class='button'>В корзину</a>
                    </div>
                               
               </div>  
            </div>

            <div className='product-windows'>
                <div class="product-item-windows">
                <img src={Turkin} alt='' title=''  />                                        
            </div>
               
        </div>
        </div>
        );
    }
}
function handleClick() {    
 
       console.log ('Hello')
    
}

