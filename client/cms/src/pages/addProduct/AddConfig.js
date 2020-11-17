import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { ADD_CONFIG } from "../../graphQl/ConfigAndGame";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

function AddConfig() {
  const history = useHistory();
  const [state, setstate] = useState({
    name: "",
    CPUId: 0,
    CPUCoolerId: 0,
    MotherboardId: 0,
    GPUId: 0,
    RAMId: 0,
    StorageId: 0,
    PowerSupplyId: 0,
    CasingId: 0,
  });
  const [addRecommendedPC] = useMutation(ADD_CONFIG, {
    onCompleted: () => {
      history.push("/");
    },
  });

  function SumbitCasing(e) {
    state.CPUId = +state.CPUId;
    state.CPUCoolerId = +state.CPUCoolerId;
    state.MotherboardId = +state.MotherboardId;
    state.GPUId = +state.GPUId;
    state.RAMId = +state.RAMId;
    state.StorageId = +state.StorageId;
    state.PowerSupplyId = +state.PowerSupplyId;
    state.CasingId = +state.CasingId;
    e.preventDefault();

    addRecommendedPC({
      variables: {
        config: state,
        access_token: localStorage.getItem("access_token"),
      },
    });
    console.log(state);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
    console.log(e.target.name);
  }
  return (
    <div>
      <Container className="main">
        <h1>Add Config</h1>
        <Form onSubmit={SumbitCasing}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Config Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>CPU ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              name="CPUId"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>CPU Cooler ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              name="CPUCoolerId"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Motherboard ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              name="MotherboardId"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>GPU ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              name="GPUId"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>RAM ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              name="RAMId"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>STORAGE ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              name="StorageId"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Power SUpply ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              name="PowerSupplyId"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Casing ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ID"
              name="CasingId"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Games
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddConfig;
