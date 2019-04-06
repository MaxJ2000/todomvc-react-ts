import * as React from 'react';
import { ITodoCountProps, ITodoCountStage } from './interface';

export default class TodoCount extends React.Component<ITodoCountProps, ITodoCountStage>{
  num: number;
  constructor(props: ITodoCountProps) {
    super(props);
  }
  render() {
    return (
      <span>{this.props.num}</span>
    )
  }
}