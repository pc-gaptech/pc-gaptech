import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { dataEdit } from "../../graphQl/cache"
import { useReactiveVar } from "@apollo/client"

// name	string
// power_draw	integer($int64)
// manufacturer	string
// GPU_chipset	string
// price	integer($int64)
// rating	integer($int64)
// picture_url	string

function GpuAdd() {
    const editProduct = useReactiveVar(dataEdit)
    const [checkStatus, setCheckStatus] = useState(false)
    const [state, setstate] = useState({
        name: "",
        power_draw: "",
        manufacturer: "",
        GPU_chipset: "",
        price: "",
        rating: "",
        picture_url: ""
    })
    useEffect(() => {
        if (editProduct) {
            setstate(editProduct)
            setCheckStatus(true)
        } else {
            setstate({
                name: "",
                power_draw: "",
                manufacturer: "",
                GPU_chipset: "",
                price: "",
                rating: "",
                picture_url: ""
            })
            setCheckStatus(false)
        }
    }, [editProduct])
    function SubmitGpu(e) {
        e.preventDefault()
        state.power_draw = +state.power_draw
        state.price = +state.price
        state.rating = +state.rating
        if (checkStatus) {
            // edit method
            console.log(state, "EDIT")
        } else {
            console.log(state, "POST")
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
                {checkStatus ? <h1>Edit GPU Product</h1>
                    :
                    <h1>Add GPU Product</h1>}
                <Form onSubmit={SubmitGpu}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Gpu Name</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.name : ""}
                            type="text"
                            placeholder="Enter Product Name"
                            name="name"
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
                        <Form.Label>GPU Chipset</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.GPU_chipset : ""}
                            type="text"
                            placeholder="Enter GPU Chipset"
                            name="GPU_chipset"
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
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            defaultValue={checkStatus ? editProduct.rating : ""}
                            type="number"
                            placeholder="Enter Rating"
                            name="rating"
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



export default GpuAdd
