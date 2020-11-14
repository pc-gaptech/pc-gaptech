import React from 'react'
import { Button } from 'react-bootstrap'

function ListProduct({ data }) {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.manufaturer}</td>
            <td>Rp.{data.price}</td>
            <td>{data.picture}</td>
            <td>
                <Button>Add</Button> |
                <Button>Delete</Button>
            </td>
        </tr>

    )
}

export default ListProduct
