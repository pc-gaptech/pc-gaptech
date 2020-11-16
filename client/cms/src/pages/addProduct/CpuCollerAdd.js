import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { dataEdit } from "../../graphQl/cache";
import { useReactiveVar, useMutation } from "@apollo/client";
import ChipInput from "material-ui-chip-input";
import { EDIT_CPUCOOLER } from "../../graphQl/mutationEdit";
import { FECTH_ALL } from "../../graphQl/query";
import { useHistory } from "react-router-dom";
import { ADD_CPUCOOLER } from "../../graphQl/mutation";

function CpuCollerAdd() {
  const history = useHistory();
  const editProduct = useReactiveVar(dataEdit);
  const [checkStatus, setCheckStatus] = useState(false);
  const [state, setstate] = useState({
    name: "",
    socket: [],
    TDP: 0,
    manufacturer: "",
    power_draw: 0,
    price: 0,
    picture_url: "",
  });
  const [addCpuCooler] = useMutation(ADD_CPUCOOLER, {
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
  const [editCPUCooler] = useMutation(EDIT_CPUCOOLER, {
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
      setCheckStatus(false);
      setstate({
        name: "",
        socket: [],
        TDP: 0,
        manufacturer: "",
        power_draw: 0,
        price: 0,
        picture_url: "",
      });
    }
  }, [editProduct]);
  function SumbitCpuColler(e) {
    e.preventDefault();

    state.TDP = +state.TDP;
    state.price = +state.price;
    state.power_draw = +state.power_draw;

    if (checkStatus) {
      state.id = +state.id;
      const dataCPUCooler = {
        name: state.name,
        socket: state.socket,
        TDP: state.TDP,
        manufacturer: state.manufacturer,
        power_draw: state.power_draw,
        price: state.price,
        picture_url: state.picture_url,
      };

      const vars = {
        variables: {
          id: state.id,
          dataCPUCooler,
          access_token: localStorage.access_token,
        },
      };
      editCPUCooler(vars);
      console.log(state);
    } else {
      addCpuCooler({
        variables: {
          access_token: localStorage.getItem("access_token"),
          addCPU: state,
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
  function handleChipset(e) {
    setstate({
      ...state,
      socket: e,
    });
  }
  return (
    <div>
      <Container className="main">
        {checkStatus ? <h1>Edit CPU Coller</h1> : <h1>Add CPU Coller</h1>}

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
            defaultValue={checkStatus ? editProduct.socket : ["LGA1151"]}
            fullWidth
            label="Socket"
            placeholder="AM4,LGA1151"
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

export default CpuCollerAdd;
