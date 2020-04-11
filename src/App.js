import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker'
import Child from './Child'
import Card from './card'

 let App = () => {
   const button = "Eat out"
   const style = { backgroundColor: 'green' }
  return (
    <>

<Card>
  <div>
    <h4>Warning!</h4>
    Are you sure?
  </div>
</Card>

      <div className="App">
     
        <header className="App-header">  
         <Card>
          <Child
            name="Nick"
            age="26"
            activity={button}
            photo={faker.image.avatar()}
          />
          </Card>

          <h3 style={style}>{button}</h3>
        </header>
      </div>

      <div className="App">
        <header className="App-header">
          
          <Card>
            <Child
              name="Barry"
              age="21"
              photo={faker.image.avatar()}
            />
          </Card>

          <h3 style={style}>{button}</h3>
        </header>
      </div>

  


</>
  );
}

export default App;
