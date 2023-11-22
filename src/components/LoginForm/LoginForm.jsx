import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Label, InputTitle, StyleField } from './LoginForm.styled';
import { Button } from '../ContactItem/ContactItem.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <InputTitle>Email</InputTitle>
        <StyleField type="email" name="email" />
      </Label>
      <Label>
        <InputTitle>Password</InputTitle>
        <StyleField type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </form>
  );
};
