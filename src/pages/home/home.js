import React from 'react';
import Turkin from './Turkin.png';
import './home.css';


export default class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1 className='h1-S'>Наши товары</h1>                
           <div className='parent'>
               <div className='block'>                    
                    <img  className='img-S' src={Turkin} alt="Туркин" title="Turkin" />                    
                    <img  className='img-S' src={Turkin} alt="Туркин" title="Turkin" />
                    <img  className='img-S' src={Turkin} alt="Туркин" title="Turkin" />                    
                    <img  className='img-S' src={Turkin} alt="Туркин" title="Turkin" />                    
               </div>                
           </div>  
</div>

        );
    }
}
