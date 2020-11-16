import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { dataEdit } from "../../graphQl/cache";
import { useReactiveVar, useMutation } from "@apollo/client";
import { EDIT_STORAGE } from "../../graphQl/mutationEdit";
import { FECTH_ALL } from "../../graphQl/query";
import { useHistory } from "react-router-dom";
import { ADD_STORAGE } from "../../graphQl/mutation";

function StorageAdd() {
  const history = useHistory();
  const editProduct = useReactiveVar(dataEdit);
  const [checkStatus, setCheckStatus] = useState(false);
  const [state, setstate] = useState({
    name: "",
    capacity: 0,
    storage_type: "",
    power_draw: 0,
    manufacturer: "",
    price: 0,
    picture_url: "",
  });
  const [addStorage] = useMutation(ADD_STORAGE, {
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
  const [editStorage] = useMutation(EDIT_STORAGE, {
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
        capacity: 0,
        storage_type: "",
        power_draw: 0,
        manufacturer: "",
        price: 0,
        picture_url: "",
      });
      setCheckStatus(false);
    }
  }, [editProduct]);
  function SumbitStorage(e) {
    e.preventDefault();

    state.capacity = +state.capacity;
    state.power_draw = +state.power_draw;
    state.price = +state.price;
    if (checkStatus) {
      state.id = +state.id;
      const dataStorage = {
        name: state.name,
        capacity: state.capacity,
        storage_type: state.storage_type,
        power_draw: state.power_draw,
        manufacturer: state.manufacturer,
        price: state.price,
        picture_url: state.picture_url,
      };

      const vars = {
        variables: {
          id: state.id,
          dataStorage,
          access_token: localStorage.access_token,
        },
      };

      editStorage(vars);
    } else {
      addStorage({
        variables: {
          access_token: localStorage.getItem("access_token"),
          dataStorage: state,
        },
      });
    }
    console.log(state);
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
          <h1>Edit Storage Product</h1>
        ) : (
          <h1>Add Storage Product</h1>
        )}
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
              name="storage_type"
              as="select"
              onChange={handleChange}
            >
              <option>Please Select</option>
              <option
                value="SATA HDD"
                selected={
                  checkStatus && editProduct.storage_type === "SATA HDD"
                }
              >
                SATA HDD
              </option>
              <option
                value="SATA SSD"
                selected={
                  checkStatus && editProduct.storage_type === "SATA SSD"
                }
              >
                SATA SSD
              </option>
              <option
                value="NVME SSD"
                selected={
                  checkStatus && editProduct.storage_type === "NVME SSD"
                }
              >
                NVME SSD
              </option>
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
  );
}

export default StorageAdd;
