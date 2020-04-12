import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Editor from './pages/editor';

function App() {
  return (
    <Router>
      <Route exact component={Editor}></Route>
    </Router>
  );
}

export default App;
