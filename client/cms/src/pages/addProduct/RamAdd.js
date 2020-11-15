import React, { useState, useEffect } from "react";
import ChipInput from "material-ui-chip-input";
import { Form, Button, Container } from "react-bootstrap";
import { dataEdit } from "../../graphQl/cache";
import { useReactiveVar, useMutation } from "@apollo/client";
import axios from "axios";
import { EDIT_RAM } from "../../graphQl/mutationEdit";
import { FECTH_ALL } from "../../graphQl/query";
import { useHistory } from "react-router-dom";

function RamAdd() {
  const history = useHistory();
  const editProduct = useReactiveVar(dataEdit);
  const [checkStatus, setCheckStatus] = useState(false);
  const [state, setstate] = useState({
    name: "",
    memory_type: "",
    chipset: [],
    manufacturer: "",
    power_draw: 0,
    memory_speed: 0,
    price: 0,
    picture_url: "",
  });
  const [editRAM] = useMutation(EDIT_RAM, {
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
        memory_type: "",
        chipset: [],
        manufacturer: "",
        power_draw: 0,
        memory_speed: 0,
        price: 0,
        picture_url: "",
      });
      setCheckStatus(false);
    }
  }, [editProduct]);
  function submitCpu(e) {
    e.preventDefault();
    state.id = +state.id;
    state.price = +state.price;
    state.power_draw = +state.power_draw;
    const {
      name,
      memory_type,
      chipset,
      manufacturer,
      power_draw0,
      memory_speed,
      price,
      picture_url,
    } = state;
    if (checkStatus) {
      const dataRAM = {
        name: state.name,
        memory_type: state.memory_type,
        chipset: state.chipset,
        manufacturer: state.manufacturer,
        power_draw: state.power_draw,
        memory_speed: state.memory_speed,
        price: state.price,
        picture_url: state.picture_url,
      };

      const vars = {
        variables: {
          id: state.id,
          dataRAM,
          access_token: localStorage.access_token,
        },
      };

      editRAM(vars);
      // edit method
      // axios({
      //     method: "PUT",
      //     url: `http://localhost:3000/parts/ram/${editProduct.id}/update`,
      //     headers: {
      //         access_token: localStorage.getItem("access_token")
      //         // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGRhbUBtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2MDUzNzM3NzR9.wbFQH7lN92OOdsvjrLy4WEFlCdwq4hc10IsJnghq5aA"
      //     },
      //     data: {
      //         name,
      //         memory_type,
      //         chipset_memory: chipset,
      //         manufacturer,
      //         power_draw0,
      //         memory_speed,
      //         price,
      //         picture_url
      //     }
      // })
      //     .then(({ data }) => {
      //         console.log(data)
      //     })
      //     .catch(err => {
      //         console.log(err.response)
      //     })
      console.log(state, "EDIT");
    } else {
      axios({
        method: "POST",
        url: "http://localhost:3000/parts/ram/add",
        headers: {
          access_token: localStorage.getItem("access_token"),
          // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGRhbUBtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2MDUzNzM3NzR9.wbFQH7lN92OOdsvjrLy4WEFlCdwq4hc10IsJnghq5aA"
        },
        data: {
          name,
          memory_type,
          chipset_memory: chipset,
          manufacturer,
          power_draw0,
          memory_speed,
          price,
          picture_url,
        },
      })
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    console.log(state);
  }
  function handleChipset(e) {
    setstate({
      ...state,
      chipset: e,
    });
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
        <Form onSubmit={submitCpu}>
          {checkStatus ? <h1>Edit RAM Product</h1> : <h1>Add RAM Product</h1>}
          <Form.Group controlId="formBasicText">
            <Form.Label>RAM Name</Form.Label>
            <Form.Control
              defaultValue={checkStatus ? editProduct.name : ""}
              type="text"
              placeholder="Enter RAM Name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Memory Type</Form.Label>
            <Form.Control
              name="memory_type"
              as="select"
              onChange={handleChange}
            >
              <option>Please Select</option>
              <option
                value="DDR3"
                selected={checkStatus && editProduct.memory_type === "DDR3"}
              >
                DDR3
              </option>
              <option
                value="DDR4"
                selected={checkStatus && editProduct.memory_type === "DDR4"}
              >
                DDR4
              </option>
            </Form.Control>
          </Form.Group>
          <ChipInput
            defaultValue={checkStatus ? editProduct.chipset : ["A350", "B450"]}
            fullWidth
            label="Chipset"
            placeholder="A350, B450, X370, b450, X470, b550, X570, B360, H370, Z370, Z390"
            onChange={handleChipset}
            name="chipset"
          />
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
          <Form.Group controlId="formBasicNumber">
            <Form.Label>Memory Speed</Form.Label>
            <Form.Control
              defaultValue={checkStatus ? editProduct.memory_speed : ""}
              type="number"
              placeholder="Enter Memory Speed"
              name="memory_speed"
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

export default RamAdd;
