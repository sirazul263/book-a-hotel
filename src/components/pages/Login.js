import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [validated, setValidated] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    phone_number: "",
    password: "",
  });

  const _change = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div id="login" className="d-flex justify-content-end">
      <div className="form-wrapper px-5 ">
        <div className="text-center mb-4 ">
          <h1 className="mb-2 mt-3 text-white">Welcome Back Explorer!</h1>
        </div>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="mx-auto mb-3 form-log"
          style={{ maxWidth: 400 }}
        >
          <Form.Group className="mb-2" controlId="phoneNumber">
            <Form.Label className="fw-medium text-brand-primary">
              Phone Number <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              onChange={_change}
              name="phone_number"
              type="tel"
              pattern="[0-9]{11}"
              placeholder="018XXXXXXXX"
              value={loginInfo.phone_number}
              className="shadow-none"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <Form.Label className="fw-medium text-brand-primary">
              Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              onChange={_change}
              name="password"
              type="password"
              placeholder="Password"
              value={loginInfo.password}
              className="shadow-none"
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100 fw-medium submit-btn mb-3">
            Login
          </Button>
          <p className="text-center">
            <Link to="/forget-password" className=" fw-medium text-hover ">
              Forget Password?
            </Link>
          </p>
          <p className="text-muted text-center">
            Already have an account?{" "}
            <Link
              to="/signup"
              className="text-brand-primary fw-medium text-hover "
            >
              Sign Up
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
