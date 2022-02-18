// TodoListコンポーネント
import { Todo } from "./types/Types"
import { TodoItem } from "./TodoItem"

type Props = {
    todoList: Array<Todo>
}

export const TodoList: React.FunctionComponent<Props> = ({todoList}) => {
    return (
        <ul>
            {todoList.map((todo: Todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    )
}