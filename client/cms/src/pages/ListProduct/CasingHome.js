import React from "react";
import { Table, Container } from "react-bootstrap";
import ListProduct from "../../components/ListProduct";
import { allProdcutVar, loadingvar } from "../../graphQl/cache";

function CasingHome() {
  const loading = loadingvar();
  const data = allProdcutVar();
  const components = "casing";

  if (loading) return <p>loading...</p>;
  return (
    <div>
      <Container>
        <h1>Product Casing</h1>
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
            {data.fetchAll.dataCasing.map((el) => {
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

export default CasingHome;
