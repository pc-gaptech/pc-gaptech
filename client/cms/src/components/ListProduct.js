import React from "react";
import { Button, Image } from "react-bootstrap";
import { dataEdit } from "../graphQl/cache";
import { useHistory } from "react-router-dom";

function ListProduct({ product, details }) {
    const history = useHistory();
    function editComponent() {
        dataEdit(product);
        history.push(`/${details}`);
        console.log(dataEdit(), details);
    }
    function deleteProdcut() {
        //  delete Product method
        console.log(product.id);
    }
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.manufacturer}</td>
            <td>Rp.{product.price}</td>
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
                    onClick={deleteProdcut}
                >
                    Delete{" "}
                </Button>
            </td>
        </tr>
    );
}

export default ListProduct;
