import React, { useState } from 'react'
import { Form, Button, Container } from "react-bootstrap"

// name	string
// socket	string
// Enum:
// [ AM4, LGA1151 ]
// chipset	string
// Enum:
// [ A350, B450, X370, b450, X470, b550, X570, B360, H370, Z370, Z390 ]
// form_factor	string
// Enum:
// [ ATX, Micro-ATX, Mini-ITX ]
// manufacturer	string
// power_draw	integer($int64)
// price	integer($int64)
// picture_url	string
function MotherBoardAdd() {
    const [state, setstate] = useState({
        name: "",
        socket: "",
        chipset: "",
        form_factor: "",
        manufacturer: "",
        power_draw: 0,
        price: 0,
        picture_url: ""
    })
    function SumbitMotherBoard(e) {
        e.preventDefault()
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
                <h1>Add MotherBoard</h1>
                <Form onSubmit={SumbitMotherBoard}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>MotherBoard Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Product Name"
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
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Chipset</Form.Label>
                        <Form.Control
                            name="chipset" as="select" onChange={handleChange}>
                            <option >Please Selecet</option>
                            <option value="A350">A350</option>
                            <option value="B450">B450</option>
                            <option value="X370">X370</option>
                            <option value="b450">b450</option>
                            <option value="X470">X470</option>
                            <option value="b550">b550</option>
                            <option value="X570">X570</option>
                            <option value="B360">B360</option>
                            <option value="H370">H370</option>
                            <option value="Z370">Z370</option>
                            <option value="Z370">Z390</option>
                        </Form.Control>
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
                        <Form.Label>Mother Board Manufacturer</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter GPU manufacturer"
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

export default MotherBoardAdd
