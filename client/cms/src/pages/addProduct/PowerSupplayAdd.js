import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { dataEdit } from "../../graphQl/cache"
import { useReactiveVar } from "@apollo/client"
import axios from "axios"

function PowerSupplayAdd() {
    const editProduct = useReactiveVar(dataEdit)
    const [checkStatus, setCheckStatus] = useState(false)
    const [state, setstate] = useState({
        name: "",
        efficiency: "",
        max_power: 0,
        manufacturer: "",
        price: 0,
        picture_url: "",
    })

    useEffect(() => {
        if (editProduct) {
            setstate(editProduct)
            setCheckStatus(true)
        } else {
            setstate({
                name: "",
                efficiency: "",
                max_power: 0,
                manufacturer: "",
                price: 0,
                picture_url: "",
            })
            setCheckStatus(false)
        }
    }, [editProduct])
    function SumbitPowerSupplay(e) {
        e.preventDefault()
        state.max_power = +state.max_power
        state.price = +state.price
        if (checkStatus) {
            // edit method
            axios({
                method: "PUT",
                url: `http://localhost:3000/parts/powerSupplay/${editProduct.id}/update`,
                headers: {
                    // access_token : localStorage.getItem("access_token")
                    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGRhbUBtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2MDUzNzM3NzR9.wbFQH7lN92OOdsvjrLy4WEFlCdwq4hc10IsJnghq5aA"
                },
                data: state
            })
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err.response)
                })
            console.log(state, "EDIT")
        } else {
            axios({
                method: "POST",
                url: "http://localhost:3000/parts/powerSupply/add",
                headers: {
                    // access_token : localStorage.getItem("access_token")
                    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGRhbUBtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2MDUzNzM3NzR9.wbFQH7lN92OOdsvjrLy4WEFlCdwq4hc10IsJnghq5aA"
                },
                data: state
            })
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err.response)
                })
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
                {checkStatus ? <h1>Edit Power Supplay Product</h1>
                    :
                    <h1>Add Power Supplay Product</h1>}
                <Form onSubmit={SumbitPowerSupplay}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Power Supplay Name</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.name : ""}
                            type="text"
                            placeholder="Enter Product Name"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Efficiency</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.efficiency : ""}
                            type="text"
                            placeholder="Enter efficiency"
                            name="efficiency"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Max Power</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.max_power : ""}
                            type="number"
                            placeholder="Enter Max Power"
                            name="max_power"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Power Supplay Manufacturer</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.manufacturer : ""}
                            type="text"
                            placeholder="Enter GPU manufacturer"
                            name="manufacturer"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.price : ""}
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

export default PowerSupplayAdd

