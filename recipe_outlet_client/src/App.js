import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './component/Home'
import Recipe from './containers/Recipe';
import Recipes from './containers/Recipes';
import Navbar from './Navbar';
import Account from './containers/Account';
import UserFavorites from './containers/UserFavorites'



const App = () => {
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
          <Route path="/recipes/:id" render={(props) => (
            <Recipe id={props.match.params.id}/>)}/>
          <Route path="/userFaves">
            <UserFavorites/>
          </Route>
          <Route path="/register">
            <Account/>
          </Route> 
          </Switch>
          </div>
    </div>
    </Router>
  );
}

export default App;
