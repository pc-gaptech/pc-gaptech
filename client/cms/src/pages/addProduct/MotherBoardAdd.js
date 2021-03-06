import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { dataEdit } from "../../graphQl/cache";
import { useReactiveVar, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { EDIT_MOTHERBOARD } from "../../graphQl/mutationEdit";
import { FECTH_ALL } from "../../graphQl/query";
import { ADD_MOTHERBOARD } from "../../graphQl/mutation";

function MotherBoardAdd() {
  const history = useHistory();
  const editProduct = useReactiveVar(dataEdit);
  const [checkStatus, setCheckStatus] = useState(false);
  const [state, setstate] = useState({
    name: "",
    socket: "",
    chipset: "",
    form_factor: "",
    manufacturer: "",
    power_draw: 0,
    price: 0,
    picture_url: "",
  });
  const [addMotherboard] = useMutation(ADD_MOTHERBOARD, {
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
  const [editMotherboard] = useMutation(EDIT_MOTHERBOARD, {
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
        socket: "",
        chipset: "",
        form_factor: "",
        manufacturer: "",
        power_draw: 0,
        price: 0,
        picture_url: "",
      });
      setCheckStatus(false);
    }
  }, [editProduct]);
  function SumbitMotherBoard(e) {
    e.preventDefault();
    state.power_draw = +state.power_draw;
    state.price = +state.price;
    if (checkStatus) {
      state.id = +state.id;
      const dataMotherboard = {
        name: state.name,
        socket: state.socket,
        chipset: state.chipset,
        form_factor: state.form_factor,
        manufacturer: state.manufacturer,
        power_draw: state.power_draw,
        price: state.price,
        picture_url: state.picture_url,
      };

      const vars = {
        variables: {
          id: state.id,
          dataMotherboard,
          access_token: localStorage.access_token,
        },
      };

      editMotherboard(vars);
    } else {
      addMotherboard({
        variables: {
          access_token: localStorage.getItem("access_token"),
          dataMotherboard: state,
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
        {checkStatus ? <h1>Edit MotherBoard</h1> : <h1>Add MotherBoard</h1>}

        <Form onSubmit={SumbitMotherBoard}>
          <Form.Group controlId="formBasicText">
            <Form.Label>MotherBoard Name</Form.Label>
            <Form.Control
              defaultValue={checkStatus ? editProduct.name : ""}
              type="text"
              placeholder="Enter Product Name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Socket</Form.Label>
            <Form.Control name="socket" as="select" onChange={handleChange}>
              <option>Please Select</option>
              <option
                value="AM4"
                selected={checkStatus && editProduct.socket === "AM4"}
              >
                AM4
              </option>
              <option
                value="LGA1151"
                selected={checkStatus && editProduct.socket === "LGA1151"}
              >
                LGA1151
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Chipset</Form.Label>
            <Form.Control name="chipset" as="select" onChange={handleChange}>
              <option>Please Select</option>
              <option
                value="A350"
                selected={checkStatus && editProduct.chipset === "A350"}
              >
                A350
              </option>
              <option
                value="B450"
                selected={checkStatus && editProduct.chipset === "B450"}
              >
                B450
              </option>
              <option
                value="X370"
                selected={checkStatus && editProduct.chipset === "X370"}
              >
                X370
              </option>
              <option
                value="b450"
                selected={checkStatus && editProduct.chipset === "b450"}
              >
                b450
              </option>
              <option
                value="X470"
                selected={checkStatus && editProduct.chipset === "X470"}
              >
                X470
              </option>
              <option
                value="b550"
                selected={checkStatus && editProduct.chipset === "b550"}
              >
                b550
              </option>
              <option
                value="X570"
                selected={checkStatus && editProduct.chipset === "X570"}
              >
                X570
              </option>
              <option
                value="B360"
                selected={checkStatus && editProduct.chipset === "B360"}
              >
                B360
              </option>
              <option
                value="H370"
                selected={checkStatus && editProduct.chipset === "H370"}
              >
                H370
              </option>
              <option
                value="Z370"
                selected={checkStatus && editProduct.chipset === "Z370"}
              >
                Z370
              </option>
              <option
                value="Z370"
                selected={checkStatus && editProduct.chipset === "Z390"}
              >
                Z390
              </option>
            </Form.Control>
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
                value="Micro_ATX"
                selected={
                  checkStatus && editProduct.form_factor === "Micro-ATX"
                }
              >
                Micro-ATX
              </option>
              <option
                value="Mini_ITX"
                selected={checkStatus && editProduct.form_factor === "Mini-ITX"}
              >
                Mini-ITX
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Mother Board Manufacturer</Form.Label>
            <Form.Control
              defaultValue={checkStatus ? editProduct.manufacturer : ""}
              type="text"
              placeholder="Enter GPU manufacturer"
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

export default MotherBoardAdd;
