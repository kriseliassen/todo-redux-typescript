import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
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
