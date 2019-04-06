import * as React from 'react';
import { ITodoLiprops, ITodoLiStage } from './interface';

export default class TodoLi extends React.Component<
  ITodoLiprops,
  ITodoLiStage
> {
  constructor(props: ITodoLiprops) {
    super(props);
    // let { key, title, completed } = this.props.todo;
    // this.key
    this.state = {
      onEdit: false,
      value: '',
    };
    this.keyDown = this.keyDown.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  keyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      this.props.onSave(this.props.todo.key, this.state.value);
      this.setState({ onEdit: false });
    }
  }
  onEdit() {
    this.setState({ onEdit: true,value:this.props.todo.title });
  }
  handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }
  render() {
    let { title, key, completed } = this.props.todo;
    if (this.state.onEdit) {
      return (
        <>
          <button onClick={() => this.props.onToggle(key)} />
          <input value={this.state.value} onKeyDown={this.keyDown} onChange={this.handleInput} />
          <button onClick={() => this.props.onDelete(key)} />
          <br/>
        </>
      );
    } else {
      if (completed) {
        return (
          <>
            <button onClick={() => this.props.onToggle(key)}>勾选</button>
            <li key={key} onDoubleClick={this.onEdit}>
              {title}
            </li>
            <button onClick={() => this.props.onDelete(key)} >删除</button>
            <br/>
          </>
        );
      } else {
        return (
          <>
            <button onClick={() => this.props.onToggle(key)} >未勾选</button>
            <li key={key} onDoubleClick={this.onEdit}>
              {title}
            </li>
            <button onClick={() => this.props.onDelete(key)} >删除</button>
            <br/>
          </>
        );
      }
    }
  }
}
