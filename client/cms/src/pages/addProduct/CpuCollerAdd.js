import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { dataEdit } from "../../graphQl/cache"
import { useReactiveVar } from "@apollo/client"

function CpuCollerAdd() {
    const editProduct = useReactiveVar(dataEdit)
    const [checkStatus, setCheckStatus] = useState(false)
    const [state, setstate] = useState({
        name: "",
        socket: "",
        TDP: 0,
        manufacturer: "",
        power_draw: 0,
        price: 0,
        picture_url: ""
    })
    useEffect(() => {
        if (editProduct) {
            setstate(editProduct)
            setCheckStatus(true)
        } else {
            setCheckStatus(false)
            setstate({
                name: "",
                socket: "",
                TDP: 0,
                manufacturer: "",
                power_draw: 0,
                price: 0,
                picture_url: ""
            })
        }
    }, [editProduct])
    function SumbitCpuColler(e) {
        e.preventDefault()
        state.TDP = +state.TDP
        state.price = +state.price
        state.power_draw = +state.power_draw
        if (checkStatus) {
            // edit method
            console.log(state)
        } else {
            console.log(state)
        }
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
                {checkStatus ? <h1>Edit CPU Coller</h1>
                    :
                    <h1>Add CPU Coller</h1>}

                <Form onSubmit={SumbitCpuColler}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>CPU Coller Name</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.name : ""}
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
                            <option >Please Select</option>
                            <option value="AM4" selected={checkStatus && editProduct.socket === "AM4"}>AM4</option>
                            <option value="LGA1151" selected={checkStatus && editProduct.socket === "LGA1151"}>LGA1151</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>TDP</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.TDP : ""}
                            type="number"
                            placeholder="Enter TDP"
                            name="TDP"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.manufacturer : ""}
                            type="text"
                            placeholder="Enter Manufacturer"
                            name="manufacturer"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Power Draw</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.power_draw : ""}
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
                            defaultValue={checkStatus ? editProduct.picture_url : ""}
                            type="text"
                            placeholder="Enter picture_url"
                            name="picture_url"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {checkStatus ? <Button variant="primary" type="submit">
                        Edit Product
                    </Button> : <Button variant="primary" type="submit">
                            Add Product
                    </Button>}
                </Form>
            </Container>
        </div>
    )
}

export default CpuCollerAdd