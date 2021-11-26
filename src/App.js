import logo from "./logo.svg";
import "./App.css";

import PollsList from "./views/PollsList";
import PollsDetail from "./views/PollsDetail";
import Home from "./views/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Reactovy komponent - funkcia
function App() {
  return (
    // toto nie je HTML ale Javascript
    // ale su to React komponenty JSX
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/list">Zoznam</Link>
        <Link to="/detail">Detail</Link>
      </nav>
      <Switch>
        <Route path="/list">
          <PollsList />
        </Route>
        <Route path="/detail">
          <PollsDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
