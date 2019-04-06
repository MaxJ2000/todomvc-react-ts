import * as React from 'react';
import { ITodoListStage, ITodo, ITodoListProps } from './interface';
import TodoLi from './ITodoLi';

export default class TodoList extends React.Component<
  ITodoListProps,
  ITodoListStage
> {
  todoListJSX: any;

  constructor(props: ITodoListProps) {
    super(props);
  }
  render() {
    let todoListJSX = this.props.todoList.map((todo: ITodo, index) =>
      <TodoLi
        todo={todo}
        onSave={this.props.onSave}
        onToggle={this.props.onToggle}
        onDelete={this.props.onDelete}
        key={this.props.todoList[index].key}
      />);
    return <ul>{todoListJSX}</ul>;
  }
}
