import * as React from 'react';

import { IPannelProps, IPannelStage } from './interface';
import TodoInput from './ITodoInput';
import TodoList from './ITodoList';
import TodoCount from './ITodoCount';

export default class Pannel extends React.Component<
  IPannelProps,
  IPannelStage
> {
  constructor(props: any) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = { todoList: [] };
  }
  onSave(key: string, title: string) {
    let todoList = this.state.todoList.map(value => {
      if (value.key === key) {
        value.title = title;
      }
      return value;
    });
    this.setState({ todoList: todoList });
  }
  onToggle(key: string) {
    let todoList = this.state.todoList.map(value => {
      if (value.key === key) {
        value.completed = !value.completed;
      }
      return value;
    });
    this.setState({ todoList: todoList });
  }

  onDelete(key: string) {
    let todoList = this.state.todoList.filter(value => {
      return !(value.key === key);
    });
    this.setState({ todoList: todoList });
  }
  onAdd(key: string, title: string) {
    let todoList = this.state.todoList.concat([
      { key: key, title: title, completed: false },
    ]);
    this.setState({ todoList: todoList });
  }
  render() {
    let num = this.state.todoList.length;
    return (
      <>
        <TodoInput onAdd={this.onAdd} />
        <TodoList
          todoList={this.state.todoList}
          onSave={this.onSave}
          onDelete={this.onDelete}
          onToggle={this.onToggle}
        />
        <TodoCount num={num}></TodoCount>
      </>
    );
  }
}
