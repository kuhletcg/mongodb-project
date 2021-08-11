import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Submit } from "../redux/actions/LoginForm";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.recipe && formData.password) {
      dispatch(addName(formData));
      setFormData({
        name: "",
        Password: "",
      });
    }
  };

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
}

export default LoginForm;
