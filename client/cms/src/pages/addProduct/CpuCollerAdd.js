import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { dataEdit } from "../../graphQl/cache"
import { useReactiveVar } from "@apollo/client"
import ChipInput from "material-ui-chip-input"
import axios from "axios"

function CpuCollerAdd() {
    const editProduct = useReactiveVar(dataEdit)
    const [checkStatus, setCheckStatus] = useState(false)
    const [state, setstate] = useState({
        name: "",
        socket: [],
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
                socket: [],
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
        const { name,
            socket,
            TDP,
            manufacturer,
            power_draw,
            price,
            picture_url } = state
        if (checkStatus) {
            // edit method
            axios({
                method: "PUT",
                url: `http://localhost:3000/parts/cpucooler/${editProduct.id}/update`,
                headers: {
                    access_token: localStorage.getItem("access_token")
                    // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGRhbUBtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2MDUzNzM3NzR9.wbFQH7lN92OOdsvjrLy4WEFlCdwq4hc10IsJnghq5aA"
                },
                data: {
                    name,
                    socket_cpu_cooler: socket,
                    TDP,
                    manufacturer,
                    power_draw,
                    price,
                    picture_url
                }
            })
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err.response)
                })
            console.log(state)
        } else {
            axios({
                method: "POST",
                url: "http://localhost:3000/parts/cpucooler/add",
                headers: {
                    access_token: localStorage.getItem("access_token")
                    // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGRhbUBtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2MDUzNzM3NzR9.wbFQH7lN92OOdsvjrLy4WEFlCdwq4hc10IsJnghq5aA"
                },
                data: {
                    name,
                    socket_cpu_cooler: socket,
                    TDP,
                    manufacturer,
                    power_draw,
                    price,
                    picture_url
                }
            })
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err.response)
                })
        }

    }
    function handleChange(e) {
        const { name, value } = e.target
        setstate({
            ...state,
            [name]: value
        })
    }
    function handleChipset(e) {
        setstate({
            ...state,
            socket: e
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
                    <ChipInput
                        defaultValue={checkStatus ? editProduct.socket : ['LGA1151',]}
                        fullWidth
                        label='Socket'
                        placeholder='AM4,LGA1151'
                        onChange={handleChipset}
                        name="socket"
                    />
                    <Form.Group controlId="formBasicText"></Form.Group>
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
