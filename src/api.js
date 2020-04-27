import { useState } from "react"
import { API } from "aws-amplify"

const apiName = "todo"
const path = "/todo"
const myInit = {
  // OPTIONAL
  // headers: {}, // OPTIONAL
  // response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  // queryStringParameters: {  // OPTIONAL
  //     name: 'param',
  // },
}

const useTodoStore = () => {
  const [todos, setTodos] = useState([])
  const getTodos = () => {
    API.get(apiName, path + "/todo", {
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    })
      .then(response => {
        setTodos(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getNewId = () => {
    return todos && todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1
  }

  const createTodo = todo => {
    API.post(apiName, path, {
      body: todo,
    })
      .then(response => {
        setTodos([...todos, { ...todo, id: getNewId() }].sort((a, b) => a - b))
      })
      .catch(error => {
        console.log(error)
      })
  }

  const updateTodo = todo => {
    API.put(apiName, path, {
      body: todo,
    })
      .then(response => {
        const updatedTodos = todos.map(t => (t.id === todo.id ? todo : t))
        setTodos([...updatedTodos].sort((a, b) => a - b))
      })
      .catch(error => {
        console.log(error)
      })
  }

  const deleteTodo = todoId => {
    API.del(apiName, path, myInit)
      .then(response => {
        setTodos(todos.filter(t => t.id !== todoId))
      })
      .catch(error => {
        console.log(error)
      })
  }

  return {
    todos,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodos,
  }
}

export default useTodoStore
