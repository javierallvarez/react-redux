import React from 'react';
import PropTypes from 'prop-types'
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {
    return (
        <div>
            <h1>Your TODOs</h1>
                {/* Iteramos sobre cada Todo.jsx */}
                {/* Pasamos por props todo lo que tiene ...todo y la func onTodoClick con el id que corresponde: */}
            <ul>
                {todos.map((todo, index) =>
                    (
                        <Todo key={index}
                            {...todo} // inc. id, text, completed...
                            onClick={
                                () => onTodoClick(todo.id)
                            }
                        />
                    )
                )}
            </ul>
        </div>
    );
}

// La lista de tareas es un array con una estructura completa:
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired,
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}


export default TodoList;
