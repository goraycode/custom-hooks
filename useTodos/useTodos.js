import { useEffect, useReducer } from "react";
import todoReducer from "./todoReducer";


const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "Add Todo",
            payload: todo,
        };

        dispatch(action);
    };

    const handleDeleteTodo = (idTodo) => {
        const actionDelete = {
            type: "Delete Todo",
            payload: idTodo,
        };

        dispatch(actionDelete);
    };

    const handleToggleTodo = (idTodo) => {
        dispatch({
            type: "Toggle Todo",
            payload: idTodo,
        });
    };



    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
    }

    export default useTodos