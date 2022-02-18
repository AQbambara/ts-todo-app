// TodoItemコンポーネント
import { Todo } from "./types/Types"


type Props = {
    todo: Todo
}

export const TodoItem: React.FunctionComponent<Props> = ({todo}) => {
    return (
        <li>
            {todo.content}
            <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
            <button>削除</button>
        </li>)
}