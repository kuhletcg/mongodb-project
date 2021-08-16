import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import useForm from "./useForm";

const LoginForm = () => {
  const { handleInputs, handleLogIn, loginForm } = useForm();

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="login-form">
        <FormGroup>
          <h1 class="font-effect-fire">Login form</h1>

          <Label for="name">name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            id="name"
            placeholder="Enter your name "
            value={formData.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="form">Password</Label>
          <Input
            type="textarea"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Enter your password"
            value={formData.password}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
