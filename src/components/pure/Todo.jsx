import React from 'react';
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text , id }) => {
    return (
        <li onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through': 'none',
                textDecorationColor: completed ? 'green': 'none',
                color: completed ? 'green': 'white',
            }}>  
            {/* Muestra cada li como ej. '1 - Tarea X'  */}
            {id+1} - {text}
        </li>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default Todo;
