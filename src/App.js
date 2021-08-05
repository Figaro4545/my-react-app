import React  from 'react';
import Header from './Header';
//import HomePage from './pages/home/home';
//import ContactPage from './pages/contact/contact';


class App extends React.Component {

    


    static path = '/';
    

    
render() {
    
    return(
        <div>
            <Header />           
            {/* <HomePage />
            <ContactPage />  */}
        </div>
          

        );
    }
    
}

 export default App



