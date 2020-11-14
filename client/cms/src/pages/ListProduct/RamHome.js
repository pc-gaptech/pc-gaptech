import React from 'react'
import { Table, Container } from "react-bootstrap"
import ListProduct from "../../components/ListProduct"

const data = [
    {
        id: 1,
        name: "AMD Ryzen 5 1600X 3.6 GHz 6-Core Processor",
        memory_type: "DDR3",
        chipset: ["X370", "b450", "X470",],
        manufacturer: "AMD",
        power_draw: 20,
        memory_speed: 128,
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
function RamHome() {
    const components = "addram"
    return (
        <div>
            <Container>
                <h1>Product RAM</h1>
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

export default RamHome
