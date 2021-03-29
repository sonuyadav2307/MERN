import React, { useState ,useEffect} from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import { useSelector , useDispatch} from 'react-redux'
import {addItems, deleteItems ,getItems} from '../actions/itemAction'
//uuidv4();
const ShoppingList = () => {
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItems())
    },[])
const {items} = useSelector(state => state.item)
console.log('this is main items',items)
  return (
      <Container>
          <ListGroup>
              <TransitionGroup className='shopping-list'>
                  {items.map(({_id,name}) =>(
                      <CSSTransition key={_id} timeout={500} classNames="fade">
                          <ListGroupItem>
                              <Button className="remove-btn"
                              color="danger"
                              size="sm"
                              onClick={() => dispatch(deleteItems(_id))}>&times;</Button>
                              {name}
                          </ListGroupItem>
                      </CSSTransition>
                  ))}
              </TransitionGroup>
          </ListGroup>
      </Container>
  )
};

export default ShoppingList;
