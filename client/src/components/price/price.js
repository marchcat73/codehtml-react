import React from 'react';

import './price.css';

const Price = () => {
  return (
    <section className="s_resume">
    <div className="section_header">
      <h2>Цены</h2>
      <div className="s_descr_wrap">
        <div className="s_descr">Примерная стоимость услуг по созданию сайтов</div>
      </div>
    </div>
    <div className="section_content">
      <div className="container">
        <div className="row resume_container">
            <div className="col-lg-6 col-md-6 left">
              <h3>Вёрстка</h3>
              <div className="resume_icon"><i className="icon-basic-sheet-pen"></i></div>
              <div className="resume_item">
                <div className="year"><p>Вёрстка главной страницы</p></div>
                <div className="resume_description"><p><strong>Цена договорная</strong></p></div>
              </div>
              <div className="resume_item">
                <div className="year"><p>Вёрстка внутренней страницы</p></div>
                <div className="resume_description"><p><strong>Цена договорная</strong></p></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 right">
              <h3>Интеграция с CMS</h3>
              <div className="resume_icon"><i className="icon-basic-gear"></i></div>
              <div className="resume_item">
                <div className="year"><p>Посадка на ModX Revo</p></div>
                <div className="resume_description"><p><strong>Цена договорная</strong></p></div>                
              </div>
              <div className="resume_item">
                  <div className="year"><p>Разработка SPA на Angular 6</p></div>
                  <div className="resume_description"><p><strong>Цена договорная</strong></p></div>                
                </div>
            </div>                
        </div>
      </div>
    </div>
  </section>
  );
};

export default Price;