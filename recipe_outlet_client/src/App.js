import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './component/Home'
import Recipe from './containers/Recipe';
import Recipes from './containers/Recipes';
import Navbar from './Navbar';
import Register from './component/Register';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/recipes">
            <Recipes/>
          </Route>
          <Route path="/recipes/:id">
            <Recipe/>
          </Route>
          {/* <Route path="/account/:id">
            <AccountContainer/>
          </Route> */}
         <Route path="/register">
            <Register/>
          </Route>
          {/* <Route path="/login">
            <Login/>
          </Route> */} 
          </Switch>
          </div>
    </div>
    </Router>
  );
}

export default App;
