import React from 'react';
import { Link } from 'react-router';

// прописываем компонент Header
export default class Header extends React.Component {
    
    static path = '/';
    
    render() {
        return (
// вставляем код из getboostrap
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'>Brand</a>                        
                    </div>
                                     
                    <ul className='nav navbar-nav'>
                        <li ><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>                    
                
                </div>
            </nav>
        );
    }
    
}
