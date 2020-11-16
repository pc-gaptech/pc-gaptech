import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { dataEdit } from "../../graphQl/cache";
import { useReactiveVar, useMutation } from "@apollo/client";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FECTH_ALL } from "../../graphQl/query";
import { EDIT_CASING } from "../../graphQl/mutationEdit";
import { ADD_CASING } from "../../graphQl/mutation";

function CasingAdd() {
  const history = useHistory();
  const editProduct = useReactiveVar(dataEdit);
  const [checkStatus, setCheckStatus] = useState(false);
  const [state, setstate] = useState({
    name: "",
    form_factor: "",
    manufacturer: "",
    price: 0,
    picture_url: 0,
  });
  const [addCasing] = useMutation(ADD_CASING, {
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

  const [editCasing] = useMutation(EDIT_CASING, {
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
        form_factor: "",
        manufacturer: "",
        price: 0,
        picture_url: 0,
      });
      setCheckStatus(false);
    }
  }, [editProduct]);
  function SumbitCasing(e) {
    e.preventDefault();

    state.price = +state.price;
    if (checkStatus) {
      state.id = +state.id;
      const dataCasing = {
        name: state.name,
        form_factor: state.form_factor,
        manufacturer: state.manufacturer,
        price: state.price,
        picture_url: state.picture_url,
      };

      const vars = {
        variables: {
          id: state.id,
          dataCasing,
          access_token: localStorage.access_token,
        },
      };

      editCasing(vars);

      console.log(state, "EDIT");
    } else {
      addCasing({
        variables: {
          access_token: localStorage.getItem("access_token"),
          dataCasing: state,
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
          <h1>Edit Casing Product</h1>
        ) : (
          <h1>Add Casing Product</h1>
        )}

        <Form onSubmit={SumbitCasing}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Casing Name</Form.Label>
            <Form.Control
              defaultValue={checkStatus ? editProduct.name : ""}
              type="text"
              placeholder="Enter Product Name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Form Factor</Form.Label>
            <Form.Control
              name="form_factor"
              as="select"
              onChange={handleChange}
            >
              <option>Please Select</option>
              <option
                value="ATX"
                selected={checkStatus && editProduct.form_factor === "ATX"}
              >
                ATX
              </option>
              <option
                value="Micro-ATX"
                selected={
                  checkStatus && editProduct.form_factor === "Micro-ATX"
                }
              >
                Micro-ATX
              </option>
              <option
                value="Mini-ITX"
                selected={checkStatus && editProduct.form_factor === "Mini-ITX"}
              >
                Mini-ITX
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Casing Manufacturer</Form.Label>
            <Form.Control
              defaultValue={checkStatus ? editProduct.manufacturer : ""}
              type="text"
              placeholder="Enter Casing manufacturer"
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

export default CasingAdd;
