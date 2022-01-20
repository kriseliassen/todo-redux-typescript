import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { SiReact, SiRedux, SiTypescript, SiTailwindcss, SiGithub } from 'react-icons/si'

const App = (): JSX.Element => {
	return (
		<div className="App min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black p-10">
			<div className="max-w-2xl mx-auto py-6 bg-white flex flex-col divide-y-2 divide-black">
				<header className="mx-auto text-center pb-5">
					<h1 className="text-4xl font-titan tracking-wide">
						To-do app
					</h1>
				</header>
				<TodoForm />
				<TodoList />
				<footer className="mx-auto w-full flex flex-col place-content-center pt-4">
					<div className="flex place-content-center">
						<a href="https://github.com/kriseliassen" className="w-fit"><SiGithub /></a>
					</div>
					<p className="text-sm text-center">
						made with
						<span className="flex gap-2 justify-center">
							<SiReact className="self-center" />
							<SiRedux className="self-center" />
							<SiTypescript className="self-center" />
							<SiTailwindcss className="self-center" />
						</span>
					</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
