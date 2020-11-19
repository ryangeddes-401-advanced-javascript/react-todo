import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

//use function passed from app in props,
//just send it the data in state

//OnSubmit(
  //grab input form states
  //send state to propsFunction

function TodoForm () {
  return(
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Todo Item</Form.Label>
    <Form.Control type="text" placeholder="Enter Task" />
    <Form.Text className="text-muted">
      Finish your tasks.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Assigned To</Form.Label>
    <Form.Control type="text" placeholder="Assignee Name" />
  </Form.Group>
  <Form.Group controlId="formBasicRange">
    <Form.Label>Difficulty</Form.Label>
    <Form.Control type="range" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Add to List!
  </Button>
</Form>
  )

}

export default TodoForm;