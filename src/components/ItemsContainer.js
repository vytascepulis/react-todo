import React from "react";
import { ListGroup } from "reactstrap";
import SingleItem from "./SingleItem";

const ItemsContainer = (props) => {
  return (
    <ListGroup className="items-container">
      <SingleItem items={props.items} deleteItem={props.deleteItem} />
    </ListGroup>
  );
};

export default ItemsContainer;
