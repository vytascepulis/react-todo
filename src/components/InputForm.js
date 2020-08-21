import React from "react";
import { Form, Input, Button } from "reactstrap";

const InputForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputField = e.target.elements[0];
    if (inputField.value.length > 0) {
      props.addItem({
        id: props.count,
        text: inputField.value,
      });
      inputField.value = "";
    } else {
      inputField.classList.add("error-field");
      setTimeout(() => {
        inputField.classList.remove("error-field");
      }, [2000]);
    }
  };

  return (
    <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
      <Input className="todo-input" placeholder="Enter your todo" />
      <Button color="primary" className="ml-3">
        Add
      </Button>
    </Form>
  );
};

export default InputForm;
