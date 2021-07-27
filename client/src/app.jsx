import './app.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Join} />

        <Route path='/chat' component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
