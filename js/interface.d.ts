import * as React from 'react';

interface ITodo {
  key: string;
  title: string;
  completed: boolean;
}
interface ITodoLiprops {
  todo: ITodo;
  onEdit: (key: string) => void;
  onSave: (key: string) => void;
  onKeydown: (e: React.KeyboardEvent, key: string) => void;
  onDelete: (key: string) => void;
  onToggle: (key: string) => void;
}
interface ITodoLiStage {}
interface ITodoListProps {
  todoList: ITodo[];
  onEdit: (key: string) => void;
  onSave: (key: string) => void;
  onKeydown: (e: React.KeyboardEvent, key: string) => void;
  onToggle: (key: string) => void;
  onDelete: (key: string) => void;
}
interface ITodoListStage {}
interface ITodoInputProps {
  onChange: React.KeyboardEventHandler;
}
interface ITodoInputStage {}
interface ITodoCountProps {
  num: number;
}
interface ITodoCountStage {}
interface IPannelProps {}
interface IPannelStage {
  todoList: ITodo[];
}
interface IPannel extends React.Component<IPannelProps, IPannelStage> {
  onEdit: (key: string) => void;
  onSave: (key: string) => void;
  onKeydown: (e: React.KeyboardEvent, key: string) => void;
  onToggle: (key: string) => void;
  onDelete: (key: string) => void;
}
