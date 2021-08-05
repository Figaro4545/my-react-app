import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'; 
import HomePage from './pages/home/home';
import ContactPage from './pages/contact/contact';

// прописываем компонент Header
export default class Header extends React.Component {
    
    static path = '/';
    
    render() {
        return (
<div>
<Router>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/contact">Контакты</Link>
          </li>          
        </ul>
      </nav>
    </header>

    <main>
      {/* <Switch> рендерит первый <Route>, совпавший с URL */}
      <Switch>
        
        <Route path="/contact">
          <ContactPage />
        </Route> 
        <Route path="/">
          <HomePage />
        </Route>       
      </Switch>
    </main>
  </Router>
</div>
        );
    }
    
}
