import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";




// Initial todos state, initially it is empty:
let initialState = [];

export const todosReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
            // Devuleve todo lo que haya en el estado inicial y añade un elemento nuevo {id: action.payload.id, ...}
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]

        case TOGGLE_TODO:
            // Cambia la tarea a completada:
            return state.map((todo) => 
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }  
                :
                todo
            )

        default:
            return state;
    }
}
