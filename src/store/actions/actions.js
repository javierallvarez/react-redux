// Incremental ID fot todos:
let nextTodoID = 0;

// Action types:
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/**
 * It returns an object with a type property set to ADD_TODO and a payload property set to an object
 * with an id and text property
 * @param {string} text - The text of the todo item
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID ++,
            text
            // (Igual que poner text: text)
        }
    }
}


/**
 * It returns an object with a type property and an id property
 * @param {number} id - The id of the todo item
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}


/**
 * It returns an object with a type property and a payload property
 * @param {string} filter - The filter to set the visibility filter to.
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}