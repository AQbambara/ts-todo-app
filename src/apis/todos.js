import axios from "axios";

// モックサーバのURL
const todoDataUrl = "http://localhost:3100/todos";


// axios.get() でGETリクエストを送信
export const getAllTodoData = async () => {
    const response = await axios.get(todoDataUrl);
    return response.data;
  };
  
// axios.post() で新規TODOを追加する
export const addTodoData = async (todo) => {
    const response = await axios.post(todoDataUrl, todo);
    return response.data;
  };

// axios.delete() で一致したidのTODOを削除する
export const deleteTodoData = async (id) => {
    axios.delete(`${todoDataUrl}/${id}`);
    return id;
  };

// axios.put() で一致したidのTODOを更新する
export const updateTodoData = async (id, todo) => {
    const response = await axios.put(`${todoDataUrl}/${id}`, todo);
    return response.data;
  };