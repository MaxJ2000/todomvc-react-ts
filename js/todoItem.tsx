/// <reference path="./interface.d.ts" />
import * as React from 'react';

import { ENTER_KEY, ESCAPE_KEY } from './constants';

export default class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
  public state: ITodoItemState;
  constructor(props: ITodoItemProps) {
    super(props);
    this.state = { editText: this.props.todo.title };
  }
  public handleSubmit(event: React.FormEvent) {
    let val = this.state.editText.trim();
    if (val) {
      this.props.onSave(val);
      this.setState({ editText: val });
    } else {
      this.props.onDestory();
    }
  }
  public handleEdit() {
    this.props.onEdit();
    this.setState({ editText: this.props.todo.title });
  }
  public handleKeyDown(event: React.KeyboardEvent) {
    if (event.keyCode === ESCAPE_KEY) {
      this.setState({ editText: this.props.todo.title });
      this.props.onCancel(event);
    } else if (event.keyCode === ENTER_KEY) {
      this.handleSubmit(event);
    }
  }
  public handleChange(event: React.FormEvent) {
    let input: any = event.target;
    this.setState({ editText: input.value });
  }
  public shouldComponentUpdate(
    nextProps: ITodoItemProps,
    nextState: ITodoItemState
  ) {
    return (
      nextProps.todo !== this.props.todo ||
      nextProps.editing !== this.props.editing ||
      nextState.editText !== this.state.editText
    );
  }
  // public componentDidUpdate(prevProps: ITodoItemProps) {
  //   if (!prevProps.editing && this.props.editing) {
  //     let node = React.findDOMNode(this.refs['editField']) as HTMLInputElement;
  //     node.focus();
  //     node.setSelectionRange(node.value.length, node.value.length);
  //   }
  // } //看不懂，好像很厉害的样子
  public render() {
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}
          />
          <label onDoubleClick={e => this.handleEdit()}>
            {this.props.todo.title}
          </label>
          <button className="destory" onClick={this.props.onDestory} />
        </div>
        <input
          // ref="editField"
          className="edit"
          value={this.state.editText}
          onBlur={e => this.handleSubmit(e)}
          onChange={e => this.handleChange(e)}
          onKeyDown={e => this.handleKeyDown(e)}
        />
      </li>
    ); //为啥onDoubleClick处要使用箭头函数？大概是为了规范？
  }
}
