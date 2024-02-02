import logo from './logo.svg';
import './App.css';
import Person2 from './Person2.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Person2 test/> */}

        {/* <Person2 test="XYZ"/>    */}
        {/* If you include test and the ="XYZ" then conditions are applied such that only some components are displayed */}
        
        {/* <Person2 personname /> */}
        {/* The second option here will display the name element of the form if this test is called - this could be a way of only displaying the values the user has input? Maybe? */}

        {/* This final test calls the relevant details from a {} if it exists*/}
        {/* <Person2 personname employ="artist" test="ninja" type="graphic"/> */}

        {/* <Person2 test="designer" type="arty"/> */}
        {/* <Person2 test="programmer"/> */}
      
        <Person2 test="ninja" colour="purple"/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
