import React from "react";

import TodoItem from "./TodoItem";

import { Alert, ListGroup } from "@follett/common-ui";

export default class TodoList extends React.Component {
  render() {
    const { todos, onTodoItemRemoved, onTodoItemToggled } = this.props;
    return (
      <ListGroup className="TodoList">
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              onTodoItemRemoved={onTodoItemRemoved}
              onTodoItemToggled={onTodoItemToggled}
              {...todo}
            />
          ))
        ) : (
          <Alert color="warning"> No item </Alert>
        )}
      </ListGroup>
    );
  }
}
