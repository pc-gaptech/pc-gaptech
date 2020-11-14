import React, { useState } from 'react'
import { Form, Button, Container } from "react-bootstrap"

function CpuCollerAdd() {
    const [state, setstate] = useState({
        name: "",
        socket: "",
        TDP: 0,
        manufacturer: "",
        power_draw: 0,
        price: 0,
        picture_url: ""
    })
    function SumbitCpuColler(e) {
        e.preventDefault()
        state.TDP = +state.TDP
        state.price = +state.price
        state.power_draw = +state.power_draw
        console.log(state)
    }
    function handleChange(e) {
        const { name, value } = e.target
        setstate({
            ...state,
            [name]: value
        })
    }
    return (
        <div>
            <Container className="main">
                <h1>Add CPU Coller</h1>
                <Form onSubmit={SumbitCpuColler}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>CPU Coller Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter CPU Coller Name"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Socket</Form.Label>
                        <Form.Control
                            name="socket" as="select" onChange={handleChange}>
                            <option >Please Selecet</option>
                            <option value="AM4">AM4</option>
                            <option value="LGA1151">LGA1151</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>TDP</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter TDP"
                            name="TDP"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Manufacturer"
                            name="manufacturer"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Power Draw</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Power Draw"
                            name="power_draw"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Price"
                            name="price"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Picture Url</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter picture_url"
                            name="picture_url"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Product
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default CpuCollerAdd
