// useRefを利用できるようにする(TODO入力フォームで利用)
import React, { useRef } from "react";

// カスタムフックををインポート
import { useTodo } from "../hooks/useTodo";

import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";


function App() {

  const {
    todoList, // 現在のTODOの状態
    addTodoListItem, // 新規TODOを追加する関数
    toggleTodoListItemStatus, //TODOの状態を反転させて更新する関数
    deleteTodoListItem // TODOを削除する関数
  } = useTodo();

  // useRefでrefオブジェクトを作成(TODO入力フォームで利用)
  const inputEl = useRef(null);

  // TODO入力フォームで入力された文字列を新しいTODOに登録するためのhandleAddTodoListItem関数を宣言
  const handleAddTodoListItem = () => {
    // 入力フォームが何も入力されてなければクリックで何も返さない
    if (inputEl.current.value === "") return;

    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  console.log("TODOリスト:", todoList);

  // 未完了リスト
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  // 完了リスト
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

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
        title="未完了のTODOリスト"
        as="h2"
      />

      <TodoList
        todoList={completedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem} 
        title="完了TODOリスト"
        as="h2"
      />
    </>
  );
}

export default App;
