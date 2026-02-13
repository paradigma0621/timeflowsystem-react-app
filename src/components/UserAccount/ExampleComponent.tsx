import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  email: string;
  password: string;
}

const useAuthorizationHeaders = (user: User) => {
  const [httpHeaders, setHttpHeaders] = useState({});
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    const fetchAuthorization = async () => {
      let headers: { [key: string]: string } = {};

      if (user && user.email && user.password) {
        // Verificar se o token já está no sessionStorage
        const authorization = sessionStorage.getItem('Authorization');
        if (authorization) {
          headers['Authorization'] = authorization;
        } else {
          // Caso não exista, autenticar no endpoint
          setIsAuthenticating(true);
          try {
            const response = await axios.get('http://localhost:8091/user', {
              headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Basic ' + btoa(`${user.email}:${user.password}`)
                  },
                  withCredentials: true, 
            });

            // Supondo que o token JWT seja retornado no cabeçalho ou no corpo
            const token = response.data.token || response.headers['Authorization'];
            if (token) {
              sessionStorage.setItem('Authorization', `${token}`);
              headers['Authorization'] = `${token}`;
            }
          } catch (error) {
            console.error('Authentication failed:', error);
          } finally {
            setIsAuthenticating(false);
          }
        }
      }

      setHttpHeaders(headers);
    };

    fetchAuthorization();
  }, [user]);

  return { httpHeaders, isAuthenticating };
};

const ExampleComponent = () => {
  const user = {        // TODO Borsatto
    email: 'oswaldo',
    password: '123',
  };

  const { httpHeaders, isAuthenticating } = useAuthorizationHeaders(user);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8091/user-accounts/all', {
        headers: httpHeaders,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={isAuthenticating}>
        {isAuthenticating ? 'Authenticating...' : 'Fetch Data'}
      </button>
    </div>
  );
};

export default ExampleComponent;

/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  email: string;
  password: string;
}

const useAuthorizationHeaders = (user: User) => {
  const [httpHeaders, setHttpHeaders] = useState({});

  useEffect(() => {
    let headers: { [key: string]: string } = {};
    if (user && user.password && user.email) {
      // Caso o usuário esteja autenticado com email e senha
      headers['Authorization'] = 'Basic ' + btoa(`${user.email}:${user.password}`);
    } else {
      // Caso contrário, pega o token armazenado no sessionStorage
      const authorization = sessionStorage.getItem('Authorization');
      if (authorization) {
        //headers['Authorization'] = authorization;
        headers['Authorization'] = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaW1lZmxvdyIsInN1YiI6IkpXVCBUb2tlbiIsInVzZXJuYW1lIjoib3N3YWxkbyIsImF1dGhvcml0aWVzIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJpYXQiOjE3MzcxNzYxNTEsImV4cCI6MTczNzIwNjE1MX0.dJhFArISYROCLJ5gOu7R9HbKg8CmDbKxyx45WXuFQ4k';
     // }
   // }
    setHttpHeaders(headers);
  }, [user]);

  return httpHeaders;
};

const ExampleComponent = () => {
  const user = {
    email: 'example@example.com',
    password: 'password123',
  };

  const httpHeaders = useAuthorizationHeaders(user);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8091/user-accounts/all', {
        headers: httpHeaders,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default ExampleComponent;
*/