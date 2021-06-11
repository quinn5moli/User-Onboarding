import React from "react";
import '../App.css'


export default function Form(props) {
    const {
      values,
      submit,
      change,
      disabled,
      errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type} = event.target

        const valueToUse = type === 'checkbox' ? checked : value
        
        change(name, valueToUse)
    }

    return (
        <form className='form submit' onSubmit={onSubmit}>
            <div className='user form submit'>
                <h3>Create Username</h3>
                <button id='button' disabled={disabled}>Submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className='inputs'>
                <label>name
                    <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>

                <label>Email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                    />
                </label>

                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>

                <label>
                    <input
                    type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={onChange}
                    /> I agree to the Terms of Service
                </label>

            </div>
        </form>
    )
}