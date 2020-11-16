import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { dataEdit } from "../../graphQl/cache";
import { useReactiveVar, useMutation } from "@apollo/client";
import { EDIT_POWER_SUPPLY } from "../../graphQl/mutationEdit";
import { FECTH_ALL } from "../../graphQl/query";
import { useHistory } from "react-router-dom";
import { ADD_POWERSUPPLY } from "../../graphQl/mutation";

function PowerSupplayAdd() {
  const history = useHistory();
  const editProduct = useReactiveVar(dataEdit);
  const [checkStatus, setCheckStatus] = useState(false);
  const [state, setstate] = useState({
    name: "",
    efficiency: "",
    max_power: 0,
    manufacturer: "",
    price: 0,
    picture_url: "",
  });
  const [addPowerSupply] = useMutation(ADD_POWERSUPPLY, {
    refetchQueries: [
      {
        query: FECTH_ALL,
        variables: { access_token: localStorage.access_token },
      },
    ],
    onCompleted: () => {
      history.push("/");
    },
  });
  const [editPowerSupply] = useMutation(EDIT_POWER_SUPPLY, {
    refetchQueries: [
      {
        query: FECTH_ALL,
        variables: { access_token: localStorage.access_token },
      },
    ],
    onCompleted: () => {
      history.push("/");
    },
  });
  useEffect(() => {
    if (editProduct) {
      setstate(editProduct);
      setCheckStatus(true);
    } else {
      setstate({
        name: "",
        efficiency: "",
        max_power: 0,
        manufacturer: "",
        price: 0,
        picture_url: "",
      });
      setCheckStatus(false);
    }
  }, [editProduct]);
  function SumbitPowerSupplay(e) {
    e.preventDefault();

    state.max_power = +state.max_power;
    state.price = +state.price;
    if (checkStatus) {
      state.id = +state.id;
      const dataPowerSupply = {
        name: state.name,
        efficiency: state.efficiency,
        max_power: state.max_power,
        manufacturer: state.manufacturer,
        price: state.price,
        picture_url: state.picture_url,
      };

      const vars = {
        variables: {
          id: state.id,
          dataPowerSupply,
          access_token: localStorage.access_token,
        },
      };

      editPowerSupply(vars);
      console.log(state, "EDIT");
    } else {
      addPowerSupply({
        variables: {
          access_token: localStorage.getItem("access_token"),
          dataPowerSupply: state,
        },
      });
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  }
  return (
    <div>
      <Container className="main">
        {checkStatus ? (
          <h1>Edit Power Supplay Product</h1>
        ) : (
          <h1>Add Power Supplay Product</h1>
        )}
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

          {checkStatus ? (
            <Button variant="primary" type="submit">
              Edit Product
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          )}
        </Form>
      </Container>
    </div>
  );
}

export default PowerSupplayAdd;
