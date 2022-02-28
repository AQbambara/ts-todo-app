// TodoListコンポーネント
import { Todo } from "./types/Types"
import { TodoItem } from "./TodoItem"
import { TodoTitle } from "./TodoTitle"

type Props = {
    todoList: Array<Todo>,
    toggleTodoListItemStatus: Function,
    deleteTodoListItem: Function,
    title: string,
    as: string
}

export const TodoList: React.FunctionComponent<Props> = ({todoList, toggleTodoListItemStatus, deleteTodoListItem, title, as}) => {
    return (
        <>
            { todoList.length !== 0 &&  (
                <>
                    <TodoTitle title={ title } as= { as } />
                    <ul>
                        {todoList.map((todo) => (
                            <TodoItem 
                                todo={todo}
                                key={todo.id}
                                toggleTodoListItemStatus={toggleTodoListItemStatus}
                                deleteTodoListItem={deleteTodoListItem}
                            />
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}