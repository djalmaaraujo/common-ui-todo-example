import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import { Container } from "@follett/common-ui";

//Based on: https://codesandbox.io/s/32z3ll478p
export default class TodoApp extends React.Component {
  handleTodoItemAdded = title => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat([
          {
            id: new Date().getTime(),
            title,
            complete: false
          }
        ])
      };
    });
  };

  handleTodoItemRemoved = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(item => {
          return item.id !== id;
        })
      };
    });
  };

  handleTodoItemToggled = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(
          item =>
            item.id === id ? { ...item, complete: !item.complete } : item
        )
      };
    });
  };

  state = {
    todos: [
      {
        id: new Date().getTime(),
        title: "Buy new shoes",
        complete: false
      },
      {
        id: new Date().getTime(),
        title: "Finish homework",
        complete: true
      },
      {
        id: new Date().getTime(),
        title: "Sent letter to John",
        complete: false
      }
    ]
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="TodoApp">
        <h1 className="text-center">Welcome to Follett Common UI</h1>
        <p className="text-center">You can play with all components.</p>
        <Container className="TodoContainer py-4">
          <h3>Todo List</h3>
          <hr />
          <TodoInput onTodoItemAdded={this.handleTodoItemAdded} />
          <TodoList
            todos={todos}
            onTodoItemToggled={this.handleTodoItemToggled}
            onTodoItemRemoved={this.handleTodoItemRemoved}
          />
        </Container>

        <p className="text-center">
          More components at{" "}
          <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
            https://getbootstrap.com/docs/4.1/getting-started/introduction/
          </a>{" "}
          or{" "}
          <a href="https://follett-common-ui.valorebooks.com/">
            https://follett-common-ui.valorebooks.com/
          </a>.
        </p>
      </div>
    );
  }
}
