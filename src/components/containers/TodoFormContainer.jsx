import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import TodoForm from '../pure/TodoForm'


const mapStateToProps = (state) => ({})
    // Not necessary this time


// Recibe el texto (valor pasado por el formulario via submit) y despacha la action.js addTodo:
const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}


const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)
export default TodoFormContainer