import { useState } from 'react';
import { loginFields } from '../constants/formFields';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = async () => {
    try {
      const response = await fetch('http://localhost:5173', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login Succesful:', data);
        history.push(data);
      } else {
        console.log('Login Failed:', data);
      }
    } catch (error) {
      console.log('Login Error:', error);
    }
  };

  return (
    <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
      <div className='-space-y-px'>
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text='Login' />
    </form>
  );
}
