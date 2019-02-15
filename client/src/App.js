import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <nav>
            <div className="nav-wrapper grey darken-4">
              <a href="/" className="brand-logo">
                <div className="logo_container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 195.39166 191.16211"
                    id="svg10"
                    version="1.1">
                    <path
                      id="path20"
                      d="m 88.08704,190.939 c -17.02067,-1.66419 -34.70947,-7.47951 -41,-13.47906 -5.92921,-5.65494 -5.07976,-10.24401 8.37744,-45.25841 6.62425,-17.23571 12.17425,-32.02812 12.33333,-32.872027 0.18812,-0.99798 -3.15853,-1.76742 -9.57337,-2.20104 -7.62036,-0.5151 -10.19697,-1.21613 -11.33333,-3.08353 -1.19051,-1.95637 -0.89841,-2.88683 1.53303,-4.883437 2.91064,-2.390096 5.5689,-3.028683 19.6629,-4.723556 l 6.66667,-0.801698 9.17066,-24.920553 c 5.04387,-13.706304 10.137155,-26.026128 11.318415,-27.377385 3.93291,-4.498883 6.727715,-5.259552 10.424585,-2.837272 4.89826,3.209468 3.82597,8.046922 -7.232385,32.627437 -10.845915,24.10832 -11.414075,22.919193 9.253305,19.366525 25.05044,-4.306103 55.09368,-16.837101 66.1668,-27.598095 6.24456,-6.068537 10.89861,-13.972721 10.89861,-18.50959 0,-15.380873 -28.59766,-25.5413602 -72,-25.5809402 C 84.59432,8.7806888 61.76769,13.515996 39.83842,23.9324 22.48671,32.174465 10.1276,46.145298 10.09956,57.549457 c -0.0158,6.442645 1.74891,9.719717 8.43986,15.672405 6.11805,5.443004 6.08628,9.24324 -0.0772,9.234956 C 5.2803696,82.439098 -3.5623906,64.071264 1.3973496,47.010345 3.2586596,40.607688 5.1452496,37.811741 12.52942,30.51256 22.91364,20.247855 32.60871,14.811155 51.64357,8.5785398 74.69102,1.0320733 88.76059,-0.67491031 120.5847,0.21429109 c 28.0638,0.7841342 38.27678,2.24645871 52.26398,7.48330571 13.34038,4.9946822 22.46721,15.6152912 22.54241,26.2319082 0.14317,20.214369 -26.84685,41.785789 -63.97072,51.127743 -10.88365,2.738792 -14.55947,4.135383 -12.66667,4.81256 37.52392,13.424682 53.53158,23.896262 61.55276,40.265402 6.19764,12.64773 3.05122,26.86675 -8.45538,38.21081 -9.72712,9.58972 -27.66184,17.55987 -46.43071,20.63371 -9.77962,1.60165 -30.089595,2.66752 -37.33333,1.95927 z m 31.11663,-10.51502 c 23.23031,-2.1654 43.77231,-13.32397 49.88643,-27.09869 7.72518,-17.40436 -11.29753,-38.56013 -44.3364,-49.30796 -9.51103,-3.09402 -29.786805,-6.888867 -36.80707,-6.888867 -5.36003,0 -5.32899,-0.0523 -16.2942,27.438547 -8.75068,21.93877 -13.56539,36.97765 -13.56539,42.37187 0,7.35385 9.77825,11.90992 30.17741,14.06081 10.277865,1.08369 13.85028,1.01723 30.93922,-0.57571 z"
                        />
                  </svg>
                </div>
              </a>
              <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><MaterialIcon icon="menu" color="#ffffff" /></a>
              <ul className="right hide-on-med-and-down">
                <li          
                >
                  <a href="/">Главная</a>
                </li>
                <li>
                  <a href="/price">Цены</a>
                </li>
                <li>
                  <a href="/portfolio">Портфолио</a>
                </li>
                <li>
                  <a href="/contact">Контакты</a>
                </li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li
            >
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/price">Цены</a>
            </li>
            <li>
                <a href="/portfolio">Портфолио</a>
            </li>
            <li>
              <a href="/contact">Контакты</a>
            </li>
          </ul>
        </nav>
        <header className="main_head main_color_bg parallax-container">
          <div className="parallax" ><img src="img/bg.jpg" alt=""/></div>
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
                    <img src="img/photo.jpg" alt="Alt" className="materialboxed" data-originalWidth="392" />
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
  }
}

export default App;
