import React from "react";
import { ListGroupItem } from "reactstrap";
import { X } from "react-feather";

const SingleItem = (props) => {
  return (
    <>
      {props.items.map((el) => (
        <ListGroupItem key={el.id}>
          {el.text}
          <span onClick={() => props.deleteItem(el.id)}>
            <X />
          </span>
        </ListGroupItem>
      ))}
    </>
  );
};

export default SingleItem;
