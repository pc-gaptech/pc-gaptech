import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { ADD_GAMES } from "../../graphQl/ConfigAndGame";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

function AddGames() {
  const history = useHistory();
  const [state, setstate] = useState({
    name: "",
    description: "",
    picture_url: "",
    rating: 0,
  });
  const [addGame] = useMutation(ADD_GAMES, {
    onCompleted: () => {
      history.push("/");
    },
  });

  function SumbitCasing(e) {
    state.rating = +state.rating;
    e.preventDefault();

    addGame({
      variables: {
        game: state,
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
        <h1>Add Games</h1>
        <Form onSubmit={SumbitCasing}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Games Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Picture Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              name="picture_url"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Name"
              name="rating"
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

export default AddGames;
