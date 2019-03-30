/// <reference path="./interface.d.ts" />

import * as React from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './constants';
import Utils from './utils';

export default class TodoFooter extends React.Component<ITodoFooterProps, {}> {
  public render() {
    let activeTodoWord = Utils.pluralize(this.props.count, 'item');
    let clearButton = null;
    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}
        >
          Clear completed
        </button>
      );
    }
    const nowShowing = this.props.nowShowing;
    return (
      <footer className="footer">
        <span className="todoCount">
          <strong>{this.props.count}</strong>{activeTodoWord} left
        </span>
      </footer>
    );
  }
}
