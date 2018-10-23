import React from "react";

import { Button, Input, Container, Row, Col } from "@follett/common-ui";

class TodoInput extends React.Component {
  handleKeyPress = e => {
    const key = e.key;
    const value = e.target.value;
    if (key === "Enter") {
      e.target.value = "";
      this.props.onTodoItemAdded(value);
    }
  };

  handleAddButtonClick = () => {
    this.props.onTodoItemAdded(this.textInput.value);
    this.textInput.value = "";
  };

  render() {
    return (
      <div class="d-flex flex-row bd-highlight mb-3">
        <Input
          type="text"
          ref={input => (this.textInput = input)}
          onKeyPress={this.handleKeyPress}
        />
        <Button
          color="primary"
          className="ml-3"
          onClick={this.handleAddButtonClick}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default TodoInput;
