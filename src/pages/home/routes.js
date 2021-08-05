import React from 'react';
// добавляем компонент Route
import { Route } from 'react-router';
// подключаем наш HomePage
import HomePage from './home';

// экспортируем по умолчанию наш Route
export default (
// он будет корневым, в котором будем передавать еще один Route
    <Route>
        <Route component={ HomePage } path='/' />
    </Route>
);
