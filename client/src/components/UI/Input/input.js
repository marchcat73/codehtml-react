import React from 'react'
import classnames from 'classnames'

function inValid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = props => {

  const inputType = props.type || 'text'
  const inputPlaceholder = props.placeholder || ''
  const cls = classnames('form-control form-control-lg', {'is-invalid': inValid(props)})
  const messageContainer = classnames('invalid-feedback', {'d-block': props.errorMessage})

  return (
    <div className="form-group">
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        className={cls}
        onChange={props.onChange}
        value={props.value}
      />
      {
        inValid(props)
          ? <div className={messageContainer}>{props.errorMessage}</div>
          : null
      }
      
    </div>
  )
}

export default Input