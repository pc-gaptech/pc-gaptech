import React, { useState } from 'react'
import ChipInput from 'material-ui-chip-input'
import { Form, Button, Container } from "react-bootstrap"

function RamAdd() {
    const [state, setstate] = useState({
        name: "",
        memory_type: "",
        chipset: [],
        manufacturer: "",
        power_draw: 0,
        memory_speed: 0,
        price: 0,
        picture_url: ""
    })
    function submitCpu(e) {
        e.preventDefault()
        state.price = +state.price
        state.power_draw = +state.power_draw
        console.log(state)
    }
    function handleChipset(e) {
        setstate({
            ...state,
            chipset: e
        })
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
                <Form onSubmit={submitCpu}>
                    <h1>Add Ram Product</h1>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>CPU Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter CPU Coller Name"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Memory Type</Form.Label>
                        <Form.Control
                            name="socket" as="select" onChange={handleChange}>
                            <option >Please Selecet</option>
                            <option value="DDR3">DDR3</option>
                            <option value="DDR4">DDR4</option>
                        </Form.Control>
                    </Form.Group>
                    <ChipInput
                        defaultValue={['A350', 'B450']}
                        fullWidth
                        label='Chipset'
                        placeholder='A350, B450, X370, b450, X470, b550, X570, B360, H370, Z370, Z390'
                        onChange={handleChipset}
                        name="chipset"
                    />
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
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Memory Speed</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Memory Speed"
                            name="memory_speed"
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

export default RamAdd


