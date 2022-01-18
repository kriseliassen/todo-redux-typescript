import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = (): JSX.Element => {
	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">
				To-do app with Redux, Typescript, and Tailwind
			</h1>
			<TodoForm />
			<TodoList />
		</div>
	);
}

export default App;
