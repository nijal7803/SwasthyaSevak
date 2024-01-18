import React,{useState} from 'react'
import '../styles/login.css'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import {Link} from 'react-router-dom'
// import "../styles/login1.css"
import loginImg from '../assets/login.png'
import userIcon from '../assets/user.png'

const Login = () => {

    const [setCredentials] =useState({
        email:undefined,
        password:undefined
    });

    const handleClick = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    }

    return (
        <>
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img  src={loginImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Login</h2>
                            

                            <Form onSubmit={handleClick}>
                                <FormGroup>
                                    <input type="email" placeholder='Email' required id='emial' onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                                </FormGroup>

                                <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>

                            </Form>

                            <p className='para1'>Don't have an account? <Link to="/register">Create</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Login;