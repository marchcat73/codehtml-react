import React, { Component } from 'react';

import './contacts.scss'

class Contacts extends Component {
  render() {
    return (
      <section id="contacts" className="s_contacts bg_light">
      <div className="section_header">
        <h2>Контакты</h2>
        <div className="s_descr_wrap">
          <div className="s_descr">Оставьте ваше сообщение</div>
        </div>
      </div>
      <div className="section_content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="contact_box">
                <i className="contacts_icon fab fa-skype"></i>
                <h3>Скайп:</h3>
                <p><a href="Skype:marchcat7373?chat" title="Skype">marchcat7373</a></p>
              </div>
              <div className="contact_box">
                <i className="contacts_icon fab fa-telegram"></i>
                <h3>Телеграмм:</h3>
                <p><a href="tg://resolve?domain=pirs73" title="Telegram">@pirs73</a></p>
              </div>
              <div className="contact_box">
                <i className="contacts_icon fab fa-wpforms"></i>
                <h3>Веб-сайт:</h3>
                <p><a href="//codehtml.ru">codehtml.ru</a></p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <form action="send.php" className="main_form hidden" id="sendpost1" name="sendpost1" noValidate method="post">
                <label className="form-group">
                  <span className="color_element">*</span> Ваше имя:
                  <input type="text" id="InputName1" name="InputName1" placeholder="Ваше имя" data-validation-required-message="Вы не ввели имя" required />
                  <span className="help-block text-danger"></span>
                </label>
                <label className="form-group">
                  <span className="color_element">*</span> Ваш E-mail:
                  <input type="email" id="InputEmail1" name="InputEmail1" placeholder="Ваш E-mail" data-validation-required-message="Не корректно введен E-mail" required />
                  <span className="help-block text-danger"></span>
                </label>
                <label className="form-group">
                  <span className="color_element">*</span> Ваше сообщение:
                  <textarea id="InputMess" name="InputMess" placeholder="Ваше сообщение" data-validation-required-message="Вы не ввели сообщение" required></textarea>
                  <span className="help-block text-danger"></span>
                </label>
                <input type="submit" className="btn btn-custom" id="submit" value="Отправить" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default Contacts