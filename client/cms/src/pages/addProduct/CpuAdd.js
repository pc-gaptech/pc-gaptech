import React, { useState, useEffect } from 'react'
import ChipInput from 'material-ui-chip-input'
import { Form, Button, Container, InputGroup } from "react-bootstrap"
import { dataEdit } from "../../graphQl/cache"
import { useReactiveVar } from "@apollo/client"


// name	string
// socket	string
// Enum:
// [ AM4, LGA1151 ]
// chipset	[string
// Enum:
// [ A350, B450, X370, b450, X470, b550, X570, B360, H370, Z370, Z390 ]
// ]
// TDP	integer($int64)
// manufacturer	string
// power_draw	integer($int64)
// core_count	integer($int64)
// is_iGPU	boolean
// max_rating	integer($int64)
// price	integer($int64)
// picture_url	string
function CpuAdd() {
    const editProduct = useReactiveVar(dataEdit)
    const [checkStatus, setCheckStatus] = useState(false)
    const [state, setstate] = useState({
        name: "",
        socket: "",
        chipset: [],
        TDP: 0,
        manufacturer: "",
        power_draw: 0,
        core_count: 0,
        is_iGPU: "",
        max_rating: 0,
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
                socket: "",
                chipset: [],
                TDP: 0,
                manufacturer: "",
                power_draw: 0,
                core_count: 0,
                is_iGPU: "",
                max_rating: 0,
                price: 0,
                picture_url: ""
            })
            setCheckStatus(false)
        }
    }, [editProduct])
    function submitCpu(e) {
        e.preventDefault()
        state.TDP = +state.TDP
        state.price = +state.price
        state.core_count = +state.core_count
        state.power_draw = +state.power_draw
        state.max_rating = +state.max_rating
        state.is_iGPU = state.is_iGPU === "yes" ? true : false
        if (checkStatus) {
            // edit method
            console.log(state)
        } else {
            console.log(state)
        }
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

        <Container className="main">
            {checkStatus ? <h1>Edit Cpu Product</h1>
                :
                <h1>Add Cpu Product</h1>}
            <Form onSubmit={submitCpu}>
                <Form.Group controlId="formBasicText">
                    <Form.Label>CPU Name</Form.Label>
                    <Form.Control
                        defaultValue={checkStatus ? editProduct.name : ""}
                        type="text"
                        placeholder="Enter CPU Coller Name"
                        name="name"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Socket</Form.Label>
                    <Form.Control
                        name="socket" as="select" onChange={handleChange}>
                        <option >Please Select</option>
                        <option selected={checkStatus && editProduct.socket === "AM4"} value="AM4">AM4</option>
                        <option selected={checkStatus && editProduct.socket === "LGA1151"} value="LGA1151">LGA1151</option>
                    </Form.Control>
                </Form.Group>
                <ChipInput
                    defaultValue={checkStatus ? editProduct.chipset : ['A350', 'B450']}
                    fullWidth
                    label='Chipset'
                    placeholder='A350, B450, X370, b450, X470, b550, X570, B360, H370, Z370, Z390'
                    onChange={handleChipset}
                    name="chipset"
                />
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
                {/* isGPU */}
                {/* <Form.Group controlId="formBasicNumber"> */}
                <Form.Label>GPU</Form.Label>
                <div>
                    <Form.Label>Yes</Form.Label>
                    <InputGroup.Radio
                        checked={checkStatus && editProduct.is_iGPU === true}
                        name="is_iGPU"
                        value="yes"
                        onChange={handleChange}
                        className="radioGpu"
                    />
                    <Form.Label>No</Form.Label>
                    <InputGroup.Radio
                        checked={checkStatus && editProduct.is_iGPU === false}
                        name="is_iGPU"
                        value="no"
                        onChange={handleChange}
                        className="radioGpu"
                    />
                </div>
                {/* </Form.Group> */}

                <Form.Group controlId="formBasicNumber">
                    <Form.Label>Core Count</Form.Label>
                    <Form.Control
                        defaultValue={checkStatus ? editProduct.core_count : ""}
                        type="number"
                        placeholder="Enter Core Count"
                        name="core_count"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicNumber">
                    <Form.Label>Max Rating</Form.Label>
                    <Form.Control
                        defaultValue={checkStatus ? editProduct.max_rating : ""}
                        type="number"
                        placeholder="Enter Max Rating"
                        name="max_rating"
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

    )
}

export default CpuAdd
