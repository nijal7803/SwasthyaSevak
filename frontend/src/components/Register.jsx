import React, { useState } from "react";
import "../styles/login.css";
import axios from "axios";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

import registerImg from "../assets/login.png";
import userIcon from "../assets/user.png";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const handleClick = async (e) => {
    e.preventDefault();
    const newMember = {
      FirstName: credentials.userName,
      LastName: "",
      Email: credentials.email,
      PhoneNumber: "",
      BirthDate: new Date(),
      JoinDate: new Date(),
      MembershipID: 1,
    };
    try {
      const response = await axios.post("/members", newMember);
      console.log("Member created successfully", response.data);
    } catch (error) {
      console.error("Error creating member", error);
    }
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={registerImg} alt="" />
                </div>

                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Register</h2>

                  <Form>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Username"
                        required
                        id="username"
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        id="emial"
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        id="password"
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <Button
                      className="btn secondary__btn auth__btn"
                      type="submit"
                      onClick={handleClick}
                    >
                      Create Account
                    </Button>
                  </Form>

                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;
