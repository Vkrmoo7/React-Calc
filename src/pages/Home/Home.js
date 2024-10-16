import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import cardsData from './cardsData.json'; // Import JSON data for the cards

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData); // Set the card data from JSON
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Our Calculator App!</h1>
      <p>Select a calculator from below to get started:</p>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <i className={`fas fa-${card.icon}`} style={{ fontSize: '50px', color: '#333' }}></i> {/* Use Font Awesome icon */}
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <Link to={card.link}>
              <button className="use-now-btn">Use Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
