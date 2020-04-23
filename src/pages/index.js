import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SideBar from "../components/sidebar"
import { TextFormField } from "../components/form"
import { Formik } from "formik"
import useTodoStore from "../api"
import "../styles.css"
import { StyledButton, DeleteButton } from "../components/button"
import styled from "@emotion/styled"
const TodoForm = ({ initialValues, onSubmit, submitLabel }) => {
  const defaultTodo = { content: "" }
  return (
    <Formik
      initialValues={{ ...defaultTodo, ...initialValues }}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, handleSubmit, handleChange, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          <TextFormField
            name="content"
            label="Content"
            id="todo-content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <StyledButton type="submit" disabled={isSubmitting}>
            {submitLabel}
          </StyledButton>
        </form>
      )}
    </Formik>
  )
}

const TodoCreationSidebar = ({ isOpen, onConfirm }) => (
  <SideBar isOpen={isOpen} title="Add a todo">
    <TodoForm onSubmit={todo => onConfirm(todo)} submitLabel="Create" />
  </SideBar>
)

const TodoEditionSidebar = ({ isOpen, todo, onConfirm }) => (
  <SideBar isOpen={isOpen} title="Edit your todo">
    <TodoForm
      initialValues={todo}
      onSubmit={todo => onConfirm(todo)}
      submitLabel="Update"
    />
  </SideBar>
)

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  > div {
    margin: 1vw;
  }
`

const StyledTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: #c8c0c0 0px 0px 11px 1px;

  .button__delete {
    opacity: 0;
    display: none;
    transition: 0.4s;
  }
  &:hover {
    .button__delete {
      opacity: 1;
      display: block;
    }
  }
`

const CTAAction = styled.div`
  position: fixed;
  bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100vw;
`

const Todo = ({ id, content, onEdit, onDelete }) => {
  return (
    <StyledTodo
      onClick={e => {
        e.stopPropagation()
        onEdit()
      }}
    >
      <p>
        {id} : {content}
      </p>
      <DeleteButton
        onClick={e => {
          onDelete()
          e.stopPropagation()
        }}
        className="button__delete"
      >
        -
      </DeleteButton>
    </StyledTodo>
  )
}

export default () => {
  const [selected, setSelected] = useState(null)
  const { todos, createTodo, updateTodo, deleteTodo, getTodos } = useTodoStore()
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div onClick={() => setSelected(null)}>
      <Layout>
        <CTAAction>
          <StyledButton
            onClick={e => {
              e.stopPropagation()
              setSelected("new")
            }}
          >
            Create
          </StyledButton>
        </CTAAction>
        <StyledGrid>
          {todos.map(todo => (
            <Todo
              key={todo.id}
              {...todo}
              onEdit={() => setSelected(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </StyledGrid>
        <TodoCreationSidebar
          isOpen={selected === "new"}
          onConfirm={todo => {
            setSelected(null)
            createTodo(todo)
          }}
        />
        <TodoEditionSidebar
          isOpen={selected !== null && selected !== "new"}
          onConfirm={todo => {
            setSelected(null)
            updateTodo(todo)
          }}
          todo={todos.find(t => t.id === selected)}
        />
      </Layout>
    </div>
  )
}
