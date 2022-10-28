import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Register = () => {
  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  };

  return (
    <Form className='w-50' onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Full Name</Form.Label>
        <Form.Control name='name' type='text' placeholder='Your Name' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photoURL' type='text' placeholder='PhotoURL' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder='Enter email'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='Password'
          required
        />
      </Form.Group>

      <Button className='mb-3' variant='primary' type='submit'>
        Register
      </Button>
      <Form.Text className='text-danger '>{error}</Form.Text>
      <ButtonGroup className='my-2'>
        <Button
          className='me-5'
          onClick={handleGoogleSignIn}
          variant='outline-primary'
        >
          <FaGoogle></FaGoogle> Login with Google{' '}
        </Button>
        <Button
          onClick={handleGithubSignIn}
          className='me-3'
          variant='outline-dark'
        >
          <FaGithub></FaGithub> Login withGitHub
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default Register;
