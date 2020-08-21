import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import InputForm from "../components/InputForm";
import ItemsContainer from "../components/ItemsContainer";

const MainBlock = () => {
  const [items, setItems] = useState([]);
  const [lastIdx, setLastIdx] = useState(0);

  const addItemHandler = (e) => {
    const itemsUpdated = [...items, e];
    setItems(itemsUpdated);
    localStorage.setItem("items", JSON.stringify(itemsUpdated));
    setLastIdx(lastIdx + 1);
  };

  const deleteItemHandler = (e) => {
    const itemsUpdated = items.filter((item) => item.id !== e);
    setItems(itemsUpdated);
    localStorage.setItem("items", JSON.stringify(itemsUpdated));
  };

  useEffect(() => {
    const itemsLocalStorage = JSON.parse(localStorage.getItem("items"));
    if (itemsLocalStorage !== null && itemsLocalStorage.length !== 0) {
      setItems(itemsLocalStorage);
      setLastIdx(itemsLocalStorage[itemsLocalStorage.length - 1].id + 1);
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card className="main-block">
            <CardBody>
              <InputForm addItem={addItemHandler} count={lastIdx} />
              <ItemsContainer deleteItem={deleteItemHandler} items={items} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainBlock;
