import logo from './logo.svg';
import './App.css';
import Person2 from './Person2.js';
import Page from './Page.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// function list(data){
//   return data.map(item=>{
//     return item > 'b' ? <li>{item}</li> : <li>****{item}</li>
//   }
//   )
// }
// Added in the array to be referred to as data

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>
        {/* We'll register different display components here: */}
        <Routes>
          <Route path="/" element={<h1>Hello: Page 1</h1>}/>
          <Route path="/a" element={<h1>Bonjour: Page 2</h1>}/>
          <Route path="/b" element={<h1>Ciao: Page 3</h1>}/>
          <Route path="/c" element={<h1>Yee Haw!: Page 4</h1>}/>
          <Route path="/c/c" element={<div><h1>Secret Meowdy.....</h1><img src="https://images7.memedroid.com/images/UPLOADED676/6260738a79367.jpeg"></img></div>}/>
          <Route path="/d" element={<div><Person2 test="ninja" colour="blue" list = "a, b, c, d, e" /></div>}/>

          <Route path="/e">
            <Route index element={<h1>Bonjour: Page 2</h1>}/>
            <Route path="e" element={<h2>Oui oui!: Page 2.2</h2>}/> 
          </Route>

        </Routes>
      </BrowserRouter>

      <Page />

        {/* {<h1>[1,2,3]</h1>}   */}

        <ol>
          {/* {list(['a', 'b', 'c', 'd', 'e'])} */}
        </ol>

        <ul>
          {/* {list(['1', '2', '3'])} */}
        </ul>
        
        {/* <Person2 /> */}

        {/* <Person2 test/> */}

        {/* <Person2 test="XYZ"/>    */}
        {/* If you include test and the ="XYZ" then conditions are applied such that only some components are displayed */}
        
        {/* <Person2 personname /> */}
        {/* The second option here will display the name element of the form if this test is called - this could be a way of only displaying the values the user has input? Maybe? */}

        {/* This final test calls the relevant details from a {} if it exists*/}
        {/* <Person2 personname employ="artist" test="ninja" type="graphic"/> */}

        {/* <Person2 test="designer" type="arty"/> */}
        {/* <Person2 test="programmer"/> */}
      



        {/* <Person2 test="ninja" colour="purple" list = "a, b, c, d, e" /> */}




        {/* <Person2 test="ninja" colour="purple" list = "b" /> */}

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
