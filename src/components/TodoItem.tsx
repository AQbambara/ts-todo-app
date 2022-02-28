// TodoItemコンポーネント
import { Todo } from "./types/Types"

type Props = {
    todo: Todo,
    toggleTodoListItemStatus: Function, 
    deleteTodoListItem: Function
}

export const TodoItem: React.FunctionComponent<Props> = ({todo, toggleTodoListItemStatus, deleteTodoListItem }) => {

    const handleToggleTodoListItemStatus = (): void => {
        toggleTodoListItemStatus(todo.id, todo.done)
    }

    const handleDeleteTodoListItem = (): void => {
        deleteTodoListItem(todo.id)
    }

    return (
        <li>
            {todo.content}
            <button onClick={ handleToggleTodoListItemStatus }>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
            <button onClick={ handleDeleteTodoListItem }>削除</button>
        </li>)
}