import React from 'react';
import Slideshow from './Slideshow';

const Home = () => {
  
    return (
      <div className="home">
         <Slideshow/>
        <br />
        <h1>Welcome to GroceryRun!</h1>
        <article>Please feel free to browse for some delicious recipes. You can also signup and add recipes to your account as a staple for those quick grocery runs.</article>
      </div>
      );
}
 
export default Home;