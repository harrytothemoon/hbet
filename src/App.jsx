import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import BettingRankHawk from './projects/BettingRankHawk';

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/betting-rank-hawk" element={<BettingRankHawk />} />
        <Route path="*" element={<Navigate to="/betting-rank-hawk" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
