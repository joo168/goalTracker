import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import AddPage from './pages/AddPage';
import StartPage from './pages/StartPage';

const App = () => {
  return (
    <div className="App">
      <Route component={StartPage} path="/" exact={true} />
      <Route component={CalendarPage} path="/calendar" />
      <Route component={AddPage} path="/add" />
    </div>
  );
};

export default App;
