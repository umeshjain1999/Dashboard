import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import Chat from './components/Chat';
import Chart from './components/Chart';
import Info from './components/Info';
import Work from './components/Work';
import Users from './components/Users';
import Dialogues from './components/settings/Dialogues';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Sidebar/>  
          <Switch>
            <Route path = '/chat'>
              <Chat name = 'Chat'/>
            </Route>
            <Route path = '/chart'>
              <Chart name = 'Chart'/>
            </Route>
            <Route path = '/info'>
              <Info name = 'Info'/>
            </Route>
            <Route path = '/work'>
              <Work name = 'Work'/>
            </Route>
            <Route path = '/users'>
              <Users name = 'Users'/>
            </Route>
            <Route path = '/settings' exact> 
                <Container name = 'Settings'/>
            </Route>
            <Route path = '/settings/dialogues' exact> 
                <Dialogues name = 'Settings > Dialogues'/>
            </Route>
            
          </Switch>
      </Router>

    </div>
  );
}

export default App;
