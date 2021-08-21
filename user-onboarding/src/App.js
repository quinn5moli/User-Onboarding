import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import userDisplay from './components/Display';
import * as yup from 'yup';
import schema from './validation/Formschema';

const API_URL = 'https://reqres.in/api/users'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialFormErrors = {
  name: '',
  email:'',
  password:'',
  terms: '',
}

const initialUser=[]
const initialDisabled= []

export default function App() {
  const [user,setUser] = useState(initialUser)
  const [formValues,setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const postNewUser = newUser => {
    axios
      .post(API_URL, newUser)
      .then(result => {
        setUser([result.data, ...user])
        console.log('troubleshoot', user)
      })
      .catch(error => {console.log(error)})
      .finally(() => {setFormValues(initialFormValues)})
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(()=> setFormErrors ({...formErrors, [name]: ''}))
      .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
  }
  
  const inputChange = (name,value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value}) 
  }

  const submitForm = () => {
    const newUser = {
      name: formValues.name(),
      email: formValues.email(),
      password: formValues.password(),
      terms: formValues.terms,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])
  return (
    <div className="App">
      <header>
        <h2>Submit User Data</h2>
      </header>
      <Form
        values={formValues}
        change={inputChange}
        submit={submitForm}
        diabled={disabled}
        errors={formErrors}
        {...user.map(user => {
          return (
            <userDisplay key={user.name} values={user}/>
          )
        })}
      />
    </div>
  );
}

