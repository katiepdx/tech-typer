import './App.css';
import Game from './components/Game';
import AddPrompt from './components/AddPrompt';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { setPromptsToLocalStorage } from './utils/localStorageUtils';
import { prompts } from './data/prompts'

function App() {
  // set seed prompts to LS
  setPromptsToLocalStorage(prompts)

  return (
    <div className="App">
      <h1>Tech Typer</h1>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Switch>
          <Route path="/create" component={AddPrompt} />
          <Route path="/" component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
