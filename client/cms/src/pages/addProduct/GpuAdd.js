import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { dataEdit } from "../../graphQl/cache";
import { useReactiveVar, useMutation } from "@apollo/client";
import { EDIT_GPU } from "../../graphQl/mutationEdit";
import { FECTH_ALL } from "../../graphQl/query";
import { useHistory } from "react-router-dom";
import { ADD_GPU } from "../../graphQl/mutation";

function GpuAdd() {
  const history = useHistory();
  const editProduct = useReactiveVar(dataEdit);
  const [checkStatus, setCheckStatus] = useState(false);
  const [state, setstate] = useState({
    name: "",
    power_draw: "",
    manufacturer: "",
    gpu_chipset: "",
    price: "",
    rating: "",
    picture_url: "",
  });
  const [addGPU] = useMutation(ADD_GPU, {
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
  const [editGPU] = useMutation(EDIT_GPU, {
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
        power_draw: "",
        manufacturer: "",
        gpu_chipset: "",
        price: "",
        rating: "",
        picture_url: "",
      });
      setCheckStatus(false);
    }
  }, [editProduct]);
  function SubmitGpu(e) {
    e.preventDefault();

    state.power_draw = +state.power_draw;
    state.price = +state.price;
    state.rating = +state.rating;
    if (checkStatus) {
      state.id = +state.id;
      const dataGPU = {
        name: state.name,
        power_draw: state.power_draw,
        manufacturer: state.manufacturer,
        gpu_chipset: state.gpu_chipset,
        price: state.price,
        rating: state.rating,
        picture_url: state.picture_url,
      };

      const vars = {
        variables: {
          id: state.id,
          dataGPU,
          access_token: localStorage.access_token,
        },
      };

      editGPU(vars);
    } else {
      addGPU({
        variables: {
          access_token: localStorage.getItem("access_token"),
          dataGPU: state,
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
        {checkStatus ? <h1>Edit GPU Product</h1> : <h1>Add GPU Product</h1>}
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
              defaultValue={checkStatus ? editProduct.gpu_chipset : ""}
              type="text"
              placeholder="Enter GPU Chipset"
              name="gpu_chipset"
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

export default GpuAdd;
