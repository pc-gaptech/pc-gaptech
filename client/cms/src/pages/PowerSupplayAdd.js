import React, { useState } from 'react'
import { Form, Button, Container } from "react-bootstrap"


function PowerSupplayAdd() {
    const [state, setstate] = useState({
        name: "",
        efficiency: "",
        max_power: 0,
        manufacturer: "",
        price: 0,
        picture_url: "",
    })
    function SumbitPowerSupplay(e) {
        e.preventDefault()
        // let { name, efficiency, max_power, manufacturer, price, picture_url } = state
        // setstate({
        //     name,
        //     efficiency,
        //     max_power: +max_power,
        //     manufacturer,
        //     price: +price,
        //     picture_url
        // })
        state.max_power = +state.max_power
        state.price = +state.price
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
                <h1>Add Power Supplay</h1>
                <Form onSubmit={SumbitPowerSupplay}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Power Supplay Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Product Name"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Efficiency</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter efficiency"
                            name="efficiency"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Max Power</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Max Power"
                            name="max_power"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Power Supplay Manufacturer</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter GPU manufacturer"
                            name="manufacturer"
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

export default PowerSupplayAdd

