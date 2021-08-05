import React from 'react';
// импортируем IndexRoute для обработки ошибок
import { Route, IndexRoute } from 'react-router';
import App from './App';
// подключаем HomePage и HomeRoutes
import { HomePage, HomeRoutes} from './pages/home/index';
import { ContactRoutes} from './pages/contact/index';

export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={ HomePage } />


        { HomeRoutes }
        { ContactRoutes }
    </Route>
);

