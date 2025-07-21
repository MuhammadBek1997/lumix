import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="home-hero__bg" />
      <div className="home-hero__content">
        <h1 className="home-hero__title">
          <span className="home-hero__title-yellow">LUNIX</span> companies
        </h1>
        <h2 className="home-hero__subtitle">надёжный партнёр!</h2>
        <div className="home-hero__info">
          <div>
            Деятельность <span className="home-hero__highlight">в Uzbekistan</span><br />
            Город <span className="home-hero__highlight">Tashkent</span>
          </div>
          <div>
            Время работы <span className="home-hero__highlight">Круглосуточно</span><br />
            Время сдачи работы <span className="home-hero__highlight">Минимальна</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;