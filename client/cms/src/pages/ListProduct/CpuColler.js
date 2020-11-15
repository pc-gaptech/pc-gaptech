import React from "react";
import { Table, Container } from "react-bootstrap";
import ListProduct from "../../components/ListProduct";
import { allProdcutVar } from "../../graphQl/cache";

function CpuColler() {
  const data = allProdcutVar();
  const components = "cpucooler";
  return (
    <div>
      <Container>
        <h1>List Product CPU Coller</h1>
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
            {data.fetchAll.dataCPUCooler.map((el) => {
              return (
                <ListProduct product={el} key={el.id} details={components} />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default CpuColler;
