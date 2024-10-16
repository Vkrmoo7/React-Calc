import React, { useState, useEffect } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  // Generate arrays for day, month, and year
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 }, (_, i) => currentYear - i);

  const calculateAge = () => {
    if (!day || !month || !year) {
      setError("Please select your date of birth.");
      setAge(null);
      return;
    }

    const birthDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
    const today = new Date();

    // Calculate the age
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birth date hasn't occurred this year yet
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge);
    setError("");
  };

  return (
    <div className="age-calculator-container">
      <h2>Age Calculator</h2>
      <div className="input-section">
        <label htmlFor="dob">Select your Date of Birth:</label>
        <div className="date-selectors">
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Day</option>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">Month</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {age !== null && !error && (
        <div className="result-container">
          <h3>Your Age: {age} years</h3>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
