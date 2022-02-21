import { useState, useEffect } from "react"
import { ulid } from "ulid"
import * as todoData from "../apis/todos"
import { Todo } from "../components/types/Types"

// いわゆるカスタムフックと呼ばれるもの
export const useTodo = () => {
    const [todoList, setTodoList] = useState<Array<Todo>>([])
    
    // 初期値として全件取得し、結果をtodoListに格納
    useEffect(()=>{
        todoData.getAllTodoData().then((allTodoData)=>{
            setTodoList(allTodoData)
        })
    }, [])

    // doneの値を反転させる
    const toggleTodoListItemStatus = (id: string, done: boolean): void=> {
        
        //todoListから指定したidと一致するものを取得する
        const todoItem: (Todo | undefined) = todoList.find((item) => item.id === id)

        // todoItemが取得出来ない場合はreturnする
        if (!todoItem) {
            return
        }

        // 指定したidのtodoのdoneを反転させてnewTodoItemというインスタンス生成
        const newTodoItem: Todo = {...todoItem, done: !done}

        todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
            const newTodoList = todoList.map((item) =>
                item.id !== updatedTodo.id ? item : updatedTodo
            )
            setTodoList(newTodoList)
        })

    }

    const addTodoListItem = (todoContent: string): void => {
        const newTodoItem: Todo = {
            id: ulid(),
            content: todoContent,
            done: false
        }

        // addTodoDataを呼び出し、処理結果をtodoListに格納する
        todoData.addTodoData(newTodoItem).then((addTodo) => {
            setTodoList([addTodo, ...todoList])
        })
    }

    const deleteTodoListItem = (id: string): void => {
        todoData.deleteTodoData(id).then((deleteListItemId) => {
            const newTodoList = todoList.filter(
                (item) => (
                    item.id !== deleteListItemId
                )
            )
            setTodoList(newTodoList)
        })

    }

    return {
        todoList,
        toggleTodoListItemStatus,
        addTodoListItem,
        deleteTodoListItem
    }
}