import { useState, useEffect } from "react";
import { ulid } from "ulid";
import * as todoData from "../apis/todos";

export const useTodo = () => {
    const [todoList, setTodoList] = useState([]);

    // モックサーバからTODOデータを取得後、取得したTODOデータを反転させておくことで、TODOを追加した順に上から表示させる
    useEffect(() => {
        todoData.getAllTodoData().then((todo)=>{
            setTodoList([...todo].reverse());
        });
    }, []);

    // todoListItemのdoneの真偽値を反転させて更新する関数
    const toggleTodoListItemStatus = (id, done) => {
        //findは配列から条件に合う値を見つけて、最初にtrueとなった要素を返し、処理終了する。
        const todoItem = todoList.find((item)=> item.id === id);
        
        // 現在のtodoListの中から、条件に一致した要素であるtodoItemの完了未完了を反転させる。
        const newTodoItem = {...todoItem, done: !done};
        
        // 指定されたidのTODOを更新したら、todoListの状態も更新する。
        todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
            const newTodoList = todoList.map((item) => 
                // idが異なる場合、todoListから取り出したitemをそのまま返し、同じ場合は反転させて新しいtodoListを作成する。
                item.id !== updatedTodo.id ? item : updatedTodo
            );
            setTodoList(newTodoList);
        });
    };

    // 新規TODOを追加するaddTodoListItem関数を宣言
    const addTodoListItem = (todoContent) => {
        const newTodoItem = {
            // TODOの内容
            content: todoContent,
            // 生成されたid
            id: ulid(),
            // デフォルトはfalseでセット
            done: false
        };

        return todoData.addTodoData(newTodoItem).then((addTodo) => {
            //todoListの状態(state)をnewTodoListが追加された状態に更新
            setTodoList([addTodo, ...todoList]);
        });
    };

    // TODOを削除するdeleteTodoListItem関数を宣言
    const deleteTodoListItem = (id) => {
        //todoDataを更新したらtodoListの状態も更新
        todoData.deleteTodoData(id).then((deleteListItemId) => {
            const newTodoList = todoList.filter(
                (item) => item.id !== deleteListItemId
            );
            setTodoList(newTodoList);
        });
    };

    // 作成した関数を返す
    return {
        todoList,
        toggleTodoListItemStatus,
        addTodoListItem,
        deleteTodoListItem
    };
};