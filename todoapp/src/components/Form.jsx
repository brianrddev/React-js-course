import { useState } from 'react';
export default function Form({ todos, setTodos }) {
	const [todo, setTodo] = useState({ name: '', done: false });
	function handleSubmit(e) {
		e.preventDefault();
		setTodos([...todos, todo]);
		setTodo({ name: '', done: false });
	}
	return (
		<>
			<form className="flex items-center" onSubmit={handleSubmit}>
				<input
					className="w-1/2 p-2 rounded bg-slate-100 focus:bg-slate-50 outline-none font-bold"
					type="text"
					placeholder="Add a new task..."
					value={todo.name}
					onChange={(e) => setTodo({ ...todo, name: e.target.value })}
				/>
				<button className="ml-2 p-2 rounded bg-green-300">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-700">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
				</button>
			</form>
		</>
	);
}
