import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { dataEdit } from "../../graphQl/cache"
import { useReactiveVar } from "@apollo/client"
import axios from "axios"

function StorageAdd() {
    const editProduct = useReactiveVar(dataEdit)
    const [checkStatus, setCheckStatus] = useState(false)
    const [state, setstate] = useState({
        name: "",
        capacity: 0,
        storage_type: "",
        power_draw: 0,
        manufacturer: "",
        price: 0,
        picture_url: ""
    })
    useEffect(() => {
        if (editProduct) {
            setstate(editProduct)
            setCheckStatus(true)
        } else {
            setstate({
                name: "",
                capacity: 0,
                storage_type: "",
                power_draw: 0,
                manufacturer: "",
                price: 0,
                picture_url: ""
            })
            setCheckStatus(false)
        }
    }, [editProduct])
    function SumbitStorage(e) {
        e.preventDefault()
        state.capacity = +state.capacity
        state.power_draw = +state.power_draw
        state.price = +state.price
        if (checkStatus) {
            // edit method
            axios({
                method: "PUT",
                url: `http://localhost:3000/parts/storage/${editProduct.id}/update`,
                headers: {
                    access_token: localStorage.getItem("access_token")
                    // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGRhbUBtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2MDUzNzM3NzR9.wbFQH7lN92OOdsvjrLy4WEFlCdwq4hc10IsJnghq5aA"
                },
                data: state
            })
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err.response)
                })
        } else {
            axios({
                method: "POST",
                url: "http://localhost:3000/parts/storage/add",
                headers: {
                    access_token: localStorage.getItem("access_token")
                    // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGRhbUBtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2MDUzNzM3NzR9.wbFQH7lN92OOdsvjrLy4WEFlCdwq4hc10IsJnghq5aA"
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
                {checkStatus ? <h1>Edit Storage Product</h1>
                    :
                    <h1>Add Storage Product</h1>}
                <Form onSubmit={SumbitStorage}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Storage Name</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.name : ""}
                            type="text"
                            placeholder="Enter Storage Name"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.capacity : ""}
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
                            <option >Please Select</option>
                            <option value="SATA HDD" selected={checkStatus && editProduct.storage_type === "SATA HDD"}>SATA HDD</option>
                            <option value="SATA SSD" selected={checkStatus && editProduct.storage_type === "SATA SSD"}>SATA SSD</option>
                            <option value="NVME SSD" selected={checkStatus && editProduct.storage_type === "NVME SSD"}>NVME SSD</option>
                        </Form.Control>
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
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.manufacturer : ""}
                            type="text"
                            placeholder="Enter Manufacturer"
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
                    <Button variant="primary" type="submit">
                        Add Product
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default StorageAdd

