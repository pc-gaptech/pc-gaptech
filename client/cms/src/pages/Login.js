import React, { useState } from 'react'
import { Container, Jumbotron, Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import axios from "axios"

const Login = () => {
    const history = useHistory()
    const [inputForm, setInputForm] = useState({
        email: "",
        password: "",
    })
    function handleChange(e) {
        const { name, value } = e.target
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }
    function loginForm(e) {
        axios({
            method: "POST",
            url: "http://localhost:3000/login",
            data: inputForm
        })
            .then(({ data }) => {
                console.log(data)
                if (!data.is_admin) {
                    throw ({ message: "not authrz" })
                } else {
                    localStorage.setItem("access_token", data.access_token)
                }
            }).catch((err) => {
                console.log(err.response)
            })
        e.preventDefault()
        history.push("/")
        console.log(inputForm)
    }

    return (
        <>
            <Jumbotron>
                <Container className="main">
                    <h1 classname="textHeaders">Login</h1>
                    <Form onSubmit={loginForm}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Jumbotron>
        </>
    )
}

export default Login
