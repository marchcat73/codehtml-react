import React, { Component } from 'react';

import './portfolio.scss'

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="s_portfolio bg_dark">
      <div className="section_header">
        <h2>Портфолио</h2>
        <div className="s_descr_wrap">
          <div className="s_descr"><p>Последние работы</p></div>
        </div>
      </div>
      <div className="section_content">
        <div className="container">
          <div className="row">
            <div className="filter_div controls">
              <ul>
                <li className="filter active" data-filter="all">Все работы</li>
                <li className="filter" data-filter=".verstka">Вёрстка</li>
                <li className="filter" data-filter=".wordpress">Wordpress</li>
                <li className="filter" data-filter=".modx">ModX</li>
                <li className="filter" data-filter=".opencart">OpenCart</li>
              </ul>
            </div>
          </div>
            
            <div className="row portfolio_grid">

              <div className="mix col-md-3 col-sm-6 col-xs-12 portfolio_item verstka">
                <img src="./assets/img/portfolio-images/1.jpg" alt="Alt" />
                <div className="port_item_cont">
                  <h3>Parts Avto</h3>
                  <p>Адаптивная верстка для интернет-магазина автозапчастей</p>
                  <a href="#modal1" className="waves-effect waves-light btn modal-trigger homepage">Посмотреть</a>
                </div>
                <div id="modal1" className="modal">
                  <button className="modal-close homepage" type="button" title="Закрыть (Esc)">×</button>
                  <div className="podrt_descr">
                    <div className="modal-box-content">
                      
                      <h3>Parts Avto</h3>
                      <p>Адаптивная верстка для интернет-магазина автозапчастей <i><a href="http://wealth-trade.ru/parts-avto/" title="Адаптивная верстка для интернет-магазина автозапчастей" target="_blank" rel="noopener noreferrer">http://wealth-trade.ru/parts-avto/</a></i>.</p>
                      <img src="./assets/img/portfolio-images/1-full.jpg" alt="Alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mix col-md-3 col-sm-6 col-xs-12 portfolio_item verstka">
                <img src="./assets/img/portfolio-images/drelistratov.jpg" alt="Alt" />
                <div className="port_item_cont">
                  <h3>DR Elistratov</h3>
                  <p>Адаптивная верстка сайта на Bootstrap 4</p>
                  <a href="#!" className="popup_content">Посмотреть</a>
                </div>
                <div className="d-none">
                  <div className="podrt_descr">
                    <div className="modal-box-content">
                      <button className="mfp-close" type="button" title="Закрыть (Esc)">×</button>
                      <h3>DR Elistratov</h3>
                      <p>Адаптивная верстка сайта на Bootstrap 4 <i><a href="https://codehtml.ru/drelistratov/" target="_blank" rel="noopener noreferrer">https://codehtml.ru/drelistratov/</a></i>.</p>
                      <img src="./assets/img/portfolio-images/drelistratov.jpg" alt="Alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mix col-md-3 col-sm-6 col-xs-12 portfolio_item verstka">
                <img src="./assets/img/portfolio-images/11.jpg" alt="Alt" />
                <div className="port_item_cont">
                  <h3>Spirit 8</h3>
                  <p>Адаптивная верстка шаблона на Bootstrap 4</p>
                  <a href="#!" className="popup_content">Посмотреть</a>
                </div>
                <div className="d-none">
                  <div className="podrt_descr">
                    <div className="modal-box-content">
                      <button className="mfp-close" type="button" title="Закрыть (Esc)">×</button>
                      <h3>Spirit 8</h3>
                      <p>Адаптивная верстка шаблона на Bootstrap 4 <i><a href="https://codehtml.ru/spirit8/" title="Адаптивная верстка шаблона на Bootstrap 4" target="_blank" rel="noopener noreferrer">https://codehtml.ru/spirit8/</a></i>.</p>
                      <img src="./assets/img/portfolio-images/11.jpg" alt="Alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mix col-md-3 col-sm-6 col-xs-12 portfolio_item verstka">
                <img src="./assets/img/portfolio-images/4.jpg" alt="Alt" />
                <div className="port_item_cont">
                  <h3>Есть Кабель</h3>
                  <p>Адаптивная верстка сайта для компании "Кабельные Системы"</p>
                  <a href="#!" className="popup_content">Посмотреть</a>
                </div>
                <div className="d-none">
                  <div className="podrt_descr">
                    <div className="modal-box-content">
                      <button className="mfp-close" type="button" title="Закрыть (Esc)">×</button>
                      <h3>Есть Кабель</h3>
                      <p>Адаптивная верстка сайта для компании "Кабельные Системы" <i><a href="http://wealth-trade.ru/estkabel/" title="Адаптивная верстка сайта для компании Кабельные Системы" target="_blank" rel="noopener noreferrer">http://wealth-trade.ru/estkabel/</a></i>.</p>
                      <img src="./assets/img/portfolio-images/4-full.jpg" alt="Alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mix col-md-3 col-sm-6 col-xs-12 portfolio_item verstka">
                <img src="./assets/img/portfolio-images/5.jpg" alt="Alt" />
                <div className="port_item_cont">
                  <h3>DONGFENG MOTOR CORPORATION</h3>
                  <p>Верстка сайта DONGFENG MOTOR RUS</p>
                  <a href="#!" className="popup_content">Посмотреть</a>
                </div>
                <div className="d-none">
                  <div className="podrt_descr">
                    <div className="modal-box-content">
                      <button className="mfp-close" type="button" title="Закрыть (Esc)">×</button>
                      <h3>DONGFENG MOTOR CORPORATION</h3>
                      <p>Верстка сайта DONGFENG MOTOR RUS <i><a href="http://wealth-trade.ru/supportix/" title="Верстка сайта DONGFENG MOTOR RUS" target="_blank" rel="noopener noreferrer">http://wealth-trade.ru/supportix/</a></i>.</p>
                      <img src="./assets/img/portfolio-images/5-full.jpg" alt="Alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mix col-md-3 col-sm-6 col-xs-12 portfolio_item verstka">
                <img src="./assets/img/portfolio-images/6.jpg" alt="Alt" />
                <div className="port_item_cont">
                  <h3>Матрица</h3>
                  <p>Вёрстка для сайта фото центра "Матрица"</p>
                  <a href="#!" className="popup_content">Посмотреть</a>
                </div>
                <div className="d-none">
                  <div className="podrt_descr">
                    <div className="modal-box-content">
                      <button className="mfp-close" type="button" title="Закрыть (Esc)">×</button>
                      <h3>Матрица</h3>
                      <p>Вёрстка внутренней страницы для сайта фото центра "Матрица" <i><a href="http://wealth-trade.ru/matrica/" title="Вёрстка внутренней страницы для сайта фото центра" target="_blank" rel="noopener noreferrer">http://wealth-trade.ru/matrica/</a></i>.</p>
                      <img src="./assets/img/portfolio-images/6-full.jpg" alt="Alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mix col-md-3 col-sm-6 col-xs-12 portfolio_item wordpress">
                <img src="./assets/img/portfolio-images/7.jpg" alt="Alt" />
                <div className="port_item_cont">
                  <h3>Drova MO</h3>
                  <p>Адаптивная верстка и посадка на WordPress</p>
                  <a href="#!" className="popup_content">Посмотреть</a>
                </div>
                <div className="d-none">
                  <div className="podrt_descr">
                    <div className="modal-box-content">
                      <button className="mfp-close" type="button" title="Закрыть (Esc)">×</button>
                      <h3>Drova MO</h3>
                      <p>Адаптивная верстка и посадка на WordPress <i><a href="http://drova-mo.ru/" title="Адаптивная верстка и посадка на WordPress" target="_blank" rel="noopener noreferrer">http://drova-mo.ru/</a></i>.</p>
                      <img src="./assets/img/portfolio-images/7-full.jpg" alt="Alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mix col-md-3 col-sm-6 col-xs-12 portfolio_item modx">
                <img src="./assets/img/portfolio-images/angola1.jpg" alt="Alt" />
                <div className="port_item_cont">
                  <h3>Заголовок работы</h3>
                  <p>Описание работы</p>
                  <a href="#!" className="popup_content">Посмотреть</a>
                </div>
                <div className="d-none">
                  <div className="podrt_descr">
                    <div className="modal-box-content">
                      <button className="mfp-close" type="button" title="Закрыть (Esc)">×</button>
                      <h3>Заголовок работы</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cupiditate, dignissimos quo. Dolore, omnis totam quibusdam voluptatibus cum, nulla dolores sunt iste? Sunt nam illum, animi magni veniam adipisci non.</p>
                      <img src="./assets/img/portfolio-images/angola1.jpg" alt="Alt" />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
        </div>
      </div>
    </section>
    )
  }
}

export default Portfolio
