interface ITodo{
  id: string;
  title: string;
  completed: boolean;
}
interface ITodoItemProps{
  key: string;
  todo: ITodo;
  editing?: boolean;
  onSave: (val: any) => void;
  onDestory: () => void;
  onEdit: () => void;
  onCancel: (event:any) => void;
  onToggle: () => void;
}
interface ITodoItemState{
  editText: string;
}
interface ITodoFooterProps{
  completedCount: number;
  onClearCompleted: any;//为啥是any妈耶
  nowShowing: string;
  count: number;
}
interface ITodoModel {
  key: any;
  todos: Array<ITodo>;
  onChanges: Array<any>;
  subscribe:(onChange:any)=>void;
  inform:()=>void;
  addTodo:(title: string)=>void;
  toggleAll:(checked:boolean)=>void;
  toggle:(todoToToggle:ITodo)=>void;
  destroy:(todo:ITodo)=>void;
  save:(todoToSave:ITodo, text:string)=>void;
  clearCompleted:()=>void;
}
interface IAppProps{
  model: ITodoModel;
}
interface IAppState {
  editing?: string;
  nowShowing?: string
}