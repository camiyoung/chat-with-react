import './app.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import { useState } from 'react';

function App({ chatService }) {
  const username = 'jiyoung';

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path='/'>
          {!username && (
            <Join
              chatService={chatService}
              setUsername={(name) => {
                setUsername(name);
              }}
            />
          )}
        </Route> */}

        <Route path='/chat'>
          {username && <Chat chatService={chatService} username={username} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
