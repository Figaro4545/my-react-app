// создаем первый наш компонент
// импортируем React из 'react'
import React from 'react';
import './App.css';
import { Header } from './components/index';

// экспортируем по умолчанию класс App, который будет наследоваться от React.Component
export default class App extends React.Component {
    
    // у всех наших классов будет статическое поле path, мы там будем хранить root нашего компонента
    // у компонента App root будет индексным
    static path = '/';

    render() {
        return (
            <div>
                <Header />
            <h1 className='h1'>Hello World!</h1>
            </div>
        );
            
            
    }
}


