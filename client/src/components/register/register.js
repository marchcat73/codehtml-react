import React, { Component } from 'react'
import Input from '../UI/Input/input'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

function validateEmail(email) {
  const re = /.+@.+\..+/i;
  return re.test(String(email).toLowerCase());
}

class Register extends Component {

  state = {
    userEmail: '',
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        placeholder: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        placeholder: 'Password',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      },
      confirmPassword: {
        value: '',
        type: 'password',
        placeholder: 'Confirm Password',
        errorMessage: 'Подтвердите пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
          sameAs: true
        }       
      }
    }
  }


  registerHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.email.value
    }
    try {
      await fetch('http://localhost:5000/api/register',
        { 
          method: 'POST', 
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          body: JSON.stringify(authData), 
          mode: 'cors'
        })
        .then( (response) => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          this.setState({
            userEmail: data.email
          })
        })
    } catch (e) {
      console.log(e)
    }
  }

  submitHandler = event => {
    event.preventDefault()
  }

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.trim().length >= validation.minLength && isValid
    }

    if (validation.sameAs) {
      isValid = value === this.state.formControls.password.value && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input 
          key={controlName + index}
          type={control.type}
          placeholder={control.placeholder}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {      
    return(
      <div className="container" style={{ marginTop: '50px', width: '700px'}}>
        <h2 style={{marginBottom: '40px'}}>Registration</h2>
        <form onSubmit={ this.submitHandler }>

          { this.renderInputs()}

          <div className="form-group">
            <button 
              type="submit" 
              className="btn btn-primary"
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Register User
            </button>
          </div>
        </form>
        {this.state.userEmail
          ? <span>Пользователь {this.state.userEmail} создан </span> 
          : null
        }
      </div>
    )
  }
}

export default Register