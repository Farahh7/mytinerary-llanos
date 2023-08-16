import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Otras rutas */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
