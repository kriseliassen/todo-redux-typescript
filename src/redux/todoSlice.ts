import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";
import { v4 as uuidv4 } from "uuid";

// const initialState = [] as Todo[];

interface TodoSliceState {
	todos: Todo[];
}

const initialState: TodoSliceState = {
	todos: [],
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: {
			reducer: (state, action: PayloadAction<Todo>) => {
				state.todos = [...state.todos, action.payload];
			},
			prepare: (title: string, description: string) => ({
				payload: {
					id: uuidv4(),
					title,
					description,
					completed: false,
				} as Todo,
			}),
		},
		updateTodo(state, action: PayloadAction<Todo>) {
			state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, ...action.payload };
				}
				return todo;
			});
		},
		removeTodo(state, action: PayloadAction<string>) {
			state.todos.filter((todo) => todo.id !== action.payload);
		},
		setTodoStatus(
			state,
			action: PayloadAction<{ completed: boolean; id: string }>
		) {
			const index = state.todos.findIndex(
				(todo) => todo.id === action.payload.id
			);
			state.todos[index].completed = action.payload.completed;
		},
	},
});

export const { addTodo, updateTodo, removeTodo, setTodoStatus } =
	todoSlice.actions;
export default todoSlice.reducer;
