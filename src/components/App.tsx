import { useRef } from "react"
import { TodoTitle } from "./TodoTitle"
import { TodoList } from "./TodoList"
import { useTodo } from "../hooks/useTodo"
import { TodoAdd } from "./TodoAdd"
import { Todo } from "./types/Types"


export default function App() {

    // useTodoを用いてtodoListを定義
    const {
        todoList,
        addTodoListItem,
        toggleTodoListItemStatus,
        deleteTodoListItem
    } = useTodo()

    const inputEl: any = useRef(null);

    const handleAddTodoListItem = (): void => {
        if (inputEl.current.value === "") {
            return
        } else {
            addTodoListItem(inputEl.current.value)
            inputEl.current.value = ""
        }
    }

    const inCompletedList: Array<Todo> = todoList.filter((todo) => {
        return !todo.done
    })

    const completedList: Array<Todo> = todoList.filter((todo) => {
        return todo.done
    })

    return (
        <>
            <TodoTitle title="TODO進捗管理" as="h1" />
            <TodoAdd
                buttonText="+ TODOを追加"
                inputEl={inputEl}
                handleAddTodoListItem={handleAddTodoListItem}
            />

            <TodoList
                todoList={inCompletedList}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
                title="完了TODOリスト"
                as="h2"
            />

            <TodoList
                todoList={completedList}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
                title="未完了TODOリスト"
                as="h2"
            />
        </>
    )
}