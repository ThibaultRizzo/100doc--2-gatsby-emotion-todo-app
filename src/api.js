import { useState } from "react"

const useTodoStore = () => {
  const [todos, setTodos] = useState([])
  const getTodos = () => {
    setTimeout(() => {
      setTodos([
        { id: 1, content: "Faire des calins" },
        { id: 2, content: "Jouer aux jeux" },
        { id: 3, content: "Faire le menage" },
      ])
    }, 500)
  }

  const getNewId = () => {
    return todos && todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1
  }

  const createTodo = todo => {
    setTodos([...todos, { ...todo, id: getNewId() }].sort((a, b) => a - b))
  }

  const updateTodo = todo => {
    const updatedTodos = todos.map(t => (t.id === todo.id ? todo : t))
    setTodos([...updatedTodos].sort((a, b) => a - b))
  }

  const deleteTodo = todoId => {
    setTodos(todos.filter(t => t.id !== todoId))
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
