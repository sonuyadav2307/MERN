import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addItem, addItems } from "../actions/itemAction";
import { v4 as uuidv4 } from "uuid";
const ItemModal = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({ modal: false, name: "" });
  const toggle = () => {
    setModal( {modal: !modal.modal , name: modal.name} );
  };

  const handleChange = (e) => {
      setModal( {modal: modal.modal, name: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      // id: uuidv4(),
      name: modal.name,
    };
   
    dispatch(addItems(newItem));
    //close modal
    toggle()
  };
  return (
    <div>
      <div>
        <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
          Add Item
        </Button>
        <Modal isOpen={modal.modal} >
          <ModalHeader toggle={toggle}>Add To shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  onChange={(e) => handleChange(e)}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Items
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default ItemModal;
