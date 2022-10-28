import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <Button className='me-3' variant='primary' type='submit'>
        Submit
      </Button>
      <ButtonGroup className='ms-3'>
        <Button
          className='me-3'
          onClick={handleGoogleSignIn}
          variant='outline-primary'
        >
          <FaGoogle></FaGoogle> Login with Google{' '}
        </Button>
        <Button className='me-3' variant='outline-dark'>
          <FaGithub></FaGithub> Login withGitHub
        </Button>
      </ButtonGroup>
      <Form.Text className='text-danger '>
        We'll never share your email with anyone else.
      </Form.Text>
    </Form>
  );
};

export default Login;
