import './App.css';
import Header from './Header'
import Home from './Home'
import Cart from './Cart'
import { BrowserRouter as Router, Switch as Switcher, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switcher>

          // Cart route
          <Route path="/cart">
            <Cart />           
          </Route>

          // Default route should be at the bottom or there will be errors
          <Route path="/">
            <Home />
          </Route>

        </Switcher>
      </div>
    </Router>
  );
}

export default App;
