import React  from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'; 
import Header from './Header';
import ErrorPage from './pages/error/error';
import HomePage from './pages/home/home';
import ContactPage from './pages/contact/contact';

class App extends React.Component {

render() {    
    return(
        <div>
            <Header />
            <Router>
                <Switch>                        
                    <Route exact path="/" component={HomePage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={ErrorPage} />
                </Switch>    
            </Router>  
        </div>
        );
    }
    
}

 export default App



