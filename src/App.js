import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AllService from './Components/AllService/AllService';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Header></Header>
          </Route>
          {/* <Route path="/">
          <Home></Home>
          </Route> */}
          
          <Route path="/services">
            <AllService></AllService>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          <Route path="/footer">
          <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
