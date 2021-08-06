import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
          <nav className='nav'>
          <a className='nav-link active' href='/'>Home</a>
          <a className='nav-link' href='/contact'>Contact</a>
          <a className='nav-link' href='/error'>Страница 404</a>
        </nav>
        );
    }
    
}
