/// <reference path="./interface.d.ts" />
import Utils from './utils';
export default class TodoModel implements ITodoModel {
  public key: string;
  public todos: ITodo[];
  public onChanges: any[];

  constructor(key: string) {
    this.key = key;
    this.todos = Utils.store(key);
    this.onChanges = [];
  }

  public subscribe(onChange: any) {
    this.onChanges.push(onChange);
  }

  public inform() {
    Utils.store(this.key, this.todos);
    this.onChanges.forEach(cb => {
      cb();
    });
  }

  public addTodo(title: string) {
    this.todos = this.todos.concat({
      id: Utils.uuid(),
      title: title,
      completed: false,
    });
    this.inform();
  }

  public toggleAll(checked: boolean) {
    // Note: It's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map(), filter() and reduce() everywhere instead of mutating the
    // array or todo items themselves.
    this.todos = this.todos.map((todo: ITodo) =>
      Utils.extend({}, todo, { completed: checked })
    );
    this.inform();
  }

  public toggle(todoToToggle: ITodo) {
    this.todos = this.todos.map((todo: ITodo) => {
      return todo !== todoToToggle
        ? todo
        : Utils.extend({}, todo, { completed: !todo.completed });
    });

    this.inform();
  }

  public destroy(todo: ITodo) {
    this.todos = this.todos.filter(function (candidate) {
      return candidate !== todo;
    });

    this.inform();
  }
  public save(todoToSave: ITodo, text: string) {
    this.todos = this.todos.map((todo) => {
      return todo !== todoToSave ? todo : Utils.extend({}, todo, { title: text });
    });
    this.inform();
  }
  public clearCompleted() {
    this.todos = this.todos.filter((todo)=>{
      return !todo.completed;
    });
    this.inform();
  }
}