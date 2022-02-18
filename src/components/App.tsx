import { useState } from "react"
import axios from "axios"
import { Todo } from "./types/Types"
import { useEffect } from "react"
import { TodoTitle } from "./TodoTitle"
import { TodoList } from "./TodoList"
// import { TodoItem } from "./TodoItem"


export default function App() {

    const todoUrl: string = "http://localhost:3100/todos"

    // todoListが状態変数, setTodoListが状態変数を変更する関数(型定義に関しては要件等)
    const [todoList, setTodoList] = useState<Array<Todo>>([])
    // 上と下は同値
    // const [todoList, setTodoList] = useState<todo[]>()

    // Stateを変更する関数なので戻り値は存在しない。
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const response = await axios.get(todoUrl)
            setTodoList(response.data)
        }
        fetchData()
    }, [])


    // TODOの状態が未完了の要素を持つ新しい配列
    const inCompletedList: Array<Todo> = todoList.filter((todo: Todo) => {
        return !todo.done
    })
    // TODOの状態が完了の要素を持つ新しい配列
    const completedList: Array<Todo> = todoList.filter((todo: Todo) => {
        return todo.done
    })

    return (
        <>
            <TodoTitle title="TODO進捗管理" as="h1" />

            {/* 機能自体はまだ実装していない */}
            <textarea />
            <button>+ TODOを追加</button>

            <TodoTitle title="未完了TODOリスト" as="h2" />
            <TodoList todoList={inCompletedList} />

            <TodoTitle title="未完了TODOリスト" as="h2" />
            <TodoList todoList={completedList} />
            
        </>
    )
}