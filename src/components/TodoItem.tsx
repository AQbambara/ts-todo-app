// TodoItemコンポーネント
import { Todo } from "./types/Types"
import * as todoData from "../apis/todos"

type Props = {
    todo: Todo
    toggleTodoListItemStatus: any, 
    deleteTodoListItem: any
}

export const TodoItem: React.FunctionComponent<Props> = ({todo, toggleTodoListItemStatus, deleteTodoListItem }) => {

    const handleToggleTodoListItemStatus = () => {
        toggleTodoListItemStatus(todo.id, todo.done)
    }

    const handleDeleteTodoListItem = () => {
        deleteTodoListItem(todo.id)
    }

    return (
        <li>
            {todo.content}
            <button onClick={ handleToggleTodoListItemStatus }>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
            <button onClick={ handleDeleteTodoListItem }>削除</button>
        </li>)
}