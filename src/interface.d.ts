import * as React from 'react';

interface ITodo {
  key: string;
  title: string;
  completed: boolean;
}
interface ITodoLiprops {
  todo: ITodo;
  onSave: (key: string,title: string) => void;
  onDelete: (key: string) => void;
  onToggle: (key: string) => void;
}
interface ITodoLiStage {
  onEdit: boolean;
  value: string;
}
interface ITodoListProps {
  todoList: ITodo[];
  onSave: (key: string, title: string) => void;
  onToggle: (key: string) => void;
  onDelete: (key: string) => void;
}
interface ITodoListStage {}
interface ITodoInputProps {
  onAdd: (key: string, title: string)=>void;
}
interface ITodoInputStage {
  value: string;
}
interface ITodoCountProps {
  num: number;
}
interface ITodoCountStage {}
interface IPannelProps {}
interface IPannelStage {
  todoList: ITodo[];
}
interface IPannel extends React.Component<IPannelProps, IPannelStage> {
  onSave: (key: string, title: string) => void;
  onToggle: (key: string) => void;
  onDelete: (key: string) => void;
  onAdd: (key: string, title: string) => void;  
}
