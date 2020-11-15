import React from "react";
import { Button, Image } from "react-bootstrap";
import { dataEdit } from "../graphQl/cache";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE } from "../graphQl/mutation";
import { FECTH_ALL } from "../graphQl/query";

function ListProduct({ product, details }) {
  const history = useHistory();
  const [deleteProduct, { error, data }] = useMutation(DELETE, {
    refetchQueries: [
      {
        query: FECTH_ALL,
        variables: {
          access_token: localStorage.getItem("access_token"),
        },
      },
    ],
  });
  console.log(data, error);
  function editComponent() {
    dataEdit(product);
    history.push(`/${details}`);
    console.log(dataEdit(), details);
  }
  function deletesProduct() {
    //  delete Product method
    deleteProduct({
      variables: {
        access_token: localStorage.getItem("access_token"),
        id: product.id,
        part: details,
      },
    });
    history.push("/");
    console.log(product.id);
  }
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.manufacturer}</td>
      <td>Rp.{product.price.toLocaleString()}</td>
      <td>
        {" "}
        <Image src={product.picture_url} style={{ width: 100, height: 100 }} />
      </td>
      <td>
        <Button
          style={{ width: 70, marginLeft: 10, marginTop: 10 }}
          onClick={editComponent}
        >
          Edit
        </Button>
        <Button
          style={{ width: 70, marginLeft: 10, marginTop: 10 }}
          onClick={deletesProduct}
        >
          Delete{" "}
        </Button>
      </td>
    </tr>
  );
}

export default ListProduct;
