import React, { useState } from 'react'
import { Form, Button, Container } from "react-bootstrap"


function StorageAdd() {
    const [state, setstate] = useState({
        name: "",
        capacity: 0,
        storage_type: "",
        power_draw: 0,
        manufacturer: "",
        price: 0,
        picture_url: ""
    })
    function SumbitStorage(e) {
        e.preventDefault()
        state.capacity = +state.capacity
        state.power_draw = +state.power_draw
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
                <h1>Add Storage</h1>
                <Form onSubmit={SumbitStorage}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Storage Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Storage Name"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Capacity"
                            name="capacity"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Storage Type</Form.Label>
                        <Form.Control
                            name="storage_type" as="select" onChange={handleChange}>
                            <option >Please Selecet</option>
                            <option value="SATA HDD">SATA HDD</option>
                            <option value="SATA SSD">SATA SSD</option>
                            <option value="NVME SSD">NVME SSD</option>
                        </Form.Control>
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
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Manufacturer"
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

export default StorageAdd

