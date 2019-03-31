import React from 'react';
import { Parallax } from 'react-parallax';

import './home.css';

const Home = () => {
  return (
    <div>
      <header className="main_head main_color_bg parallax-container">
      <Parallax
            bgImage={require('../../assets/img/bg.jpg')}
            bgImageAlt="the cat"
            strength={500}
        >
            
            <div style={{ height: '500px' }} />
      </Parallax>
      <div className="top_wrapper">
        <div className="top_text">
          <h1>Вёрстка сайтов</h1>
          <p>Web-мастер / Верстальщик</p>
        </div>
      </div>
    </header>
    <section id="about" className="s_about bg_light">
      <div className="section_header">
        <h2>Услуги</h2>
        <div className="s_descr_wrap">
          <div className="s_descr"><p>Информация</p></div>
        </div>
      </div>
      <div className="section_content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 order-2 animation_1">
              <h3>Фото</h3>
              <div className="person">
                <img src="./assets/img/photo.jpg" alt="Alt" className="materialboxed" data-originalwidth="392" />
              </div>
            </div>
            <div className="col-lg-4 order-1 animation_2">
              <h3>Используемые технологии</h3>
              <ul>
                <li>Вёрстка из PSD макетов</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>Gulp</li>
                <li>Bootstrap</li>
                <li>Flexbox</li>
                <li>JavaScrypt</li>
                <li>Node JS</li>
                <li>MongoDB</li>
                <li>Angular 6</li>
              </ul>
              <p>Bалидно, адаптивно, кроссброузерно.</p>
            </div>
            <div className="col-lg-4 order-3 animation_3 personal_last_block">
              <h3>Персональная информация</h3>
              <ul>
                <li>Профессиональное создание сайтов: HTML верстка, посадка на CMS ModX Revo.</li>
                <li>Skype: marchcat7373</li>
                <li>Веб-сайт: <a href="//codehtml.ru" target="_blank" rel="noopener noreferrer">codehtml.ru</a></li>
              </ul>
              <div className="social_wrap">
                <ul>
                  <li><a href="#!" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#!" target="_blank" rel="noopener noreferrer"><i className="fab fa-vk"></i></a></li>
                  <li><a href="#!" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#!" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;