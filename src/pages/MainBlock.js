import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import InputForm from "../components/InputForm";
import ItemsContainer from "../components/ItemsContainer";

const MainBlock = () => {
  const [items, setItems] = useState([]);

  const addItemHandler = (e) => {
    const itemsUpdated = [...items, e];
    setItems(itemsUpdated);
    localStorage.setItem("items", JSON.stringify(itemsUpdated));
  };

  const deleteItemHandler = (e) => {
    const itemsUpdated = items.filter((item) => item.id !== e);
    setItems(itemsUpdated);
    localStorage.setItem("items", JSON.stringify(itemsUpdated));
  };

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card className="main-block">
            <CardBody>
              <InputForm addItem={addItemHandler} count={items.length} />
              <ItemsContainer deleteItem={deleteItemHandler} items={items} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainBlock;
