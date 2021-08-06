import React from 'react';

export default class ErrorPage extends React.Component {
    
    render() {
        return (
            <div>
                <div className='alert alert-danger'>
                    <h1>Страница не найдена</h1>
                    <p><a href='/'>Перейти на главную страницу</a></p>
                </div>
            </div>            
        );
    }
}
