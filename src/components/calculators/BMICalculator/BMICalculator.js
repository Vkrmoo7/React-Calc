import React, { useState } from "react";
import ZingChart from "zingchart-react";
import "./BMICalculator.css";

function BMICalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [barChartConfig, setBarChartConfig] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height || !age || !gender || isNaN(weight) || isNaN(height)) {
      setErrorMessage("Please enter valid values for all fields.");
      setBMI(null);
      setBMICategory("");
      setBarChartConfig(null);
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    setBMI(bmiValue);
    setErrorMessage("");
    
    // BMI category logic
    let category = "";
    if (bmiValue < 18.5) {
      category = "Underweight";
      setBMICategory(category);
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      category = "Normal weight";
      setBMICategory(category);
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      category = "Overweight";
      setBMICategory(category);
    } else if (bmiValue >= 30) {
      category = "Obesity";
      setBMICategory(category);
    }

    // Bar Chart Config for BMI ranges with the user's BMI value
    setBarChartConfig({
      type: "bar",
      title: {
        text: "BMI Ranges with Your BMI",
        fontSize: 16
      },
      scaleX: {
        labels: ["Underweight", "Normal", "Overweight", "Obesity"]
      },
      series: [
        {
          values: [18.5, 24.9, 29.9, 40],
          backgroundColor: ["#FFC107", "#28A745", "#FF9800", "#FF5722"]
        },
        {
          // This series is used to map the user's BMI value
          values: [bmiValue, bmiValue, bmiValue, bmiValue],
          backgroundColor: "rgba(0,0,255,0.5)", // Semi-transparent bar to highlight user's BMI
          alpha: 0.5
        }
      ],
      "scale-y": {
        values: "0:40:5",
        guide: {
          lineStyle: "solid"
        }
      },
      plot: {
        animation: {
          effect: 2,
          method: 5,
          speed: 1500
        }
      }
    });
  };

  const resetCalculator = () => {
    setAge("");
    setGender("");
    setWeight("");
    setHeight("");
    setBMI(null);
    setBMICategory("");
    setErrorMessage("");
    setBarChartConfig(null);
  };

  return (
    <div className="bmi-calculator-container">
      <h2>BMI Calculator</h2>
      <div className="bmi-calculator-content">
        {/* Input Section */}
        <div className="input-section">
          <div className="input-container">
            <label>Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
            />
          </div>

          <div className="input-container">
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="input-container">
            <label>Weight (kg):</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </div>

          <div className="input-container">
            <label>Height (cm):</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="button-container">
            <button onClick={calculateBMI} className="calculate-btn">
              Calculate BMI
            </button>
            <button onClick={resetCalculator} className="reset-btn">
              Reset
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="output-section">
          {bmi && (
            <div className="result-container">
              <h3>Your BMI: {bmi}</h3>
              <p className="bmi-category">Category: {bmiCategory}</p>
            </div>
          )}

          {barChartConfig && <ZingChart data={barChartConfig} height="300px" />}
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
