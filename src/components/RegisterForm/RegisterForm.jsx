import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, InputTitle, StyleField } from './RegisterForm.styled';
import { Button } from '../ContactItem/ContactItem.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
      <Form
          onSubmit={handleSubmit}
          autoComplete="off">
      <Label><InputTitle>Username</InputTitle>
        <StyleField type="text" name="name" />
      </Label>
      <Label>
        <InputTitle>Email</InputTitle>
        <StyleField type="email" name="email" />
      </Label>
      <Label>
        <InputTitle>Password</InputTitle>
        <StyleField type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};