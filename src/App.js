import React from 'react';
import {Button} from '@material-ui/core'
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="imgbox">
       
        <p style={{fontSize:"50px"}} className = "pigpink">
          Pigs are the best!
        </p>
        <p >
        Welcome to this page!
        </p>
      <Button variant="outlined" color="secondary" >
          About this page
      </Button>
        
        
      </div>
    </div>
  );
}

export default App;

