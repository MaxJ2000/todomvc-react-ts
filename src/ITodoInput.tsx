import * as React from 'react';
import { ITodoInputProps, ITodoInputStage } from './interface';
import Utils from './utils';

export default class TodoInput extends React.Component<
  ITodoInputProps,
  ITodoInputStage
  > {
  constructor(props: ITodoInputProps) {
    super(props);
    this.state = { value: "input here" };
    this.handleChange=this.handleChange.bind(this);
    this.handleKeyDown=this.handleKeyDown.bind(this);
  }
  handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }
  handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      this.props.onAdd(Utils.uuid(),this.state.value);
    }
  }
  render() {
    return (
      <input value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown}></input>
    )
  }
}
