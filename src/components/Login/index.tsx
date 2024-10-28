import React, { useState } from 'react';
import { useUserAccountLoginMutation } from 'api/userAccount'
import { useNavigate } from 'react-router-dom'
import { formatSubmitData } from 'data/formatters'
import { IUserAccountLoginData } from 'types/IUserAccountLoginData';
import 'styles/Login.css';


export default function Login() {
  
  const { mutate, isPending } = useUserAccountLoginMutation()
    
  const navigate = useNavigate()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const mutation = (data: IUserAccountLoginData) => {
    const payload = {
      ...data
    }

    mutate(
      [formatSubmitData<IUserAccountLoginData>(payload)],
      {
        onError: (err: any) => console.log(err?.message),
        onSuccess: (data: any) => {
          // Redirects to protected page that requires authentication to load User Account data from Security Microservice
          navigate('/userAccountsList', { state: data });
        }
      }
    )
  }

  const onSubmit = () => {
    const newUserAccount: IUserAccountLoginData = {
      userid: username,
      pwd: password
    };
    mutation(newUserAccount)
  }

  return (
      <div >
        <br />
        Login Page
        <br />
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
          <input type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" disabled = {isPending}>
            Login
          </button>
        </form>
      </div>
  );
}