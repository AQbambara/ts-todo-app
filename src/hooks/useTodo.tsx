import { useState, useEffect } from "react"
import { ulid } from "ulid"
import * as todoData from "../apis/todos"
import { TodoList } from "../components/TodoList"
import { Todo } from "../components/types/Types"

export const useTodo = () => {
    const [todoList, setTodoList] = useState<Array<Todo>>([])

    useEffect(()=>{
        todoData.getAllTodoData().then(()=>{
            setTodoList(todoList)
        })
    }, [])
}