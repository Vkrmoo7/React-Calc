import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Calculators from './pages/Calculators/Calculators';
import BasicCalculator from './components/calculators/BasicCalculator/BasicCalculator';
import BMICalculator from './components/calculators/BMICalculator/BMICalculator';
import AgeCalculator from './components/calculators/AgeCalculator/AgeCalculator';
import ExpenseManager from './components/calculators/ExpenseManager/ExpenseManager';
import About from './pages/About/About';

function App() {
  return (
    // Set the basename to match your GitHub repository name
    <Router basename="/React-Calc">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculators/*" element={<Calculators />}>
            <Route path="basic" element={<BasicCalculator />} />
            <Route path="bmi" element={<BMICalculator />} />
            <Route path="age" element={<AgeCalculator />} />
            <Route path="expense" element={<ExpenseManager />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
