import React, { useState } from 'react'
import { Form, Button, Container } from "react-bootstrap"

// id	integer($int64)
// name	string
// form_factor	string
// Enum:
// [ ATX, Micro-ATX, Mini-ITX ]
// manufacturer	string
// price	integer($int64)
// picture_url	string
function CasingAdd() {
    const [state, setstate] = useState({
        name: "",
        form_factor: "",
        manufacturer: "",
        price: 0,
        picture_url: 0,
    })
    function SumbitCasing(e) {
        e.preventDefault()
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
                <h1>Add Casing Product</h1>
                <Form onSubmit={SumbitCasing}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Casing Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Product Name"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Form Factor</Form.Label>
                        <Form.Control
                            name="form_factor" as="select" onChange={handleChange}>
                            <option >Please Selecet</option>
                            <option value="ATX">ATX</option>
                            <option value="Micro-ATX">Micro-ATX</option>
                            <option value="Mini-ITX">Mini-ITX</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Casing Manufacturer</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Casing manufacturer"
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

export default CasingAdd
