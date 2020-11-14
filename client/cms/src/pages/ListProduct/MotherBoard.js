import React from 'react'
import { Table, Container } from "react-bootstrap"
import ListProduct from "../../components/ListProduct"
const data = [
    {
        id: 1,
        name: "AMD Ryzen 5 1600X 3.6 GHz 6-Core Processor",
        socket: "AM4",
        chipset: ["A350", "B450", "X370",],
        form_factor: "Micro-ATX",
        manufacturer: "AMD",
        power_draw: 100,
        price: 12000,
        picture_url: "https://images-na.ssl-images-amazon.com/images/I/31QTMJNsk2L.jpg"
    },
    {
        id: 2,
        name: "AMD Ryzen 5 1600X 3.6 GHz 6-Core Processor",
        manufacturer: "AMD",
        price: 12000,
        picture_url: "https://images-na.ssl-images-amazon.com/images/I/31QTMJNsk2L.jpg"
    },
    {
        id: 3,
        name: "AMD Ryzen 5 1600X 3.6 GHz 6-Core Processor",
        manufacturer: "AMD",
        price: 12000,
        picture_url: "https://images-na.ssl-images-amazon.com/images/I/31QTMJNsk2L.jpg"
    },
    {
        id: 4,
        name: "AMD Ryzen 5 1600X 3.6 GHz 6-Core Processor",
        manufacturer: "AMD",
        price: 12000,
        picture_url: "https://images-na.ssl-images-amazon.com/images/I/31QTMJNsk2L.jpg"
    }
]
function MotherBoard() {
    const components = "addmotherboard"
    return (
        <div>
            <Container>
                <h1>List Product Motherboard </h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Manufakturer</th>
                            <th>Price</th>
                            <th>Picture</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(el => {
                            return <ListProduct
                                product={el}
                                key={el.id}
                                details={components}
                            />
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default MotherBoard
