import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../pure/TodoList'

// Actions:
import { toggleTodo } from '../../store/actions/actions'


// Filter Todo list:
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        // Filtra por tareas no completadas:
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        // Filtra por tareas completadas:
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        // Por defecto, muestra todas las tareas:
        default:
            return todos;
    }
}



// Pasa los props que tienen que ver con el estado a TodoList
const mapStateToProps = (state) => {
    // Devuelve las props que le hemos pasado a TodoList, incluye la func para filtrar:
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}



// Pasa los props que tienen que ver con el despacho de acciones a la función TodoList:
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

// We connect State and Dispatch to TodoList's props as a const to export:
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer