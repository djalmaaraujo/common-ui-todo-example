import React from "react";
import classNames from "classnames";

import { ListGroupItem, Toggle } from "@follett/common-ui";

export default class TodoItem extends React.Component {
  handleRemoveButtonClick = () => {
    const { onTodoItemRemoved, id } = this.props;
    onTodoItemRemoved(id);
  };

  handleTodoTitleClick = () => {
    const { onTodoItemToggled, id } = this.props;
    onTodoItemToggled(id);
  };

  render() {
    const { title, complete } = this.props;
    const titleClassName = classNames("TodoItem__title", {
      "TodoItem__title--complete": complete
    });
    return (
      <ListGroupItem className="TodoItem">
        <div onClick={this.handleTodoTitleClick} className={titleClassName}>
          {title}
        </div>
        <Toggle checked={complete} onClick={this.handleTodoTitleClick} />
      </ListGroupItem>
    );
  }
}
