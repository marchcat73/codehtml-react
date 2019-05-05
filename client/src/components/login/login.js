import React, { Component } from 'react'
import Input from '../UI/Input/input'
// import decode from 'jwt-decode'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import {auth} from '../../store/actions/auth'

function validateEmail(email) {
  const re = /.+@.+\..+/i;
  return re.test(String(email).toLowerCase());
}

class Login extends Component {

  state = {
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
      }
    }
  }


  loginHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    )


    // try {
    //   await fetch('http://localhost:5000/api/login',
    //     { 
    //       method: 'POST', 
    //       headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //       body: JSON.stringify(authData), 
    //       mode: 'cors'
    //     })
    //     .then( (response) => {
    //       if (!response.ok) {
    //           throw Error(response.statusText);
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       localStorage.setItem('token', data.token)
    //     })
    // } catch (e) {
    //   console.log(e)
    // }
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
        <h2 style={{marginBottom: '40px'}}>Login</h2>
        <form onSubmit={ this.submitHandler }>

          { this.renderInputs()}

          <div className="form-group">
            <button 
              type="submit" 
              className="btn btn-primary"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Login User
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
  }
}

export default connect(null, mapDispatchToProps)(Login)