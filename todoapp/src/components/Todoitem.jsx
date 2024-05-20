export default function Todoitem({ index, todo, todos, setTodos }) {
	function deleteTodo(todo) {
		setTodos(todos.filter((t) => t !== todo));
	}
	function updateTodo(todo) {
		setTodos(todos.map((t) => (t === todo ? { ...todo, done: !todo.done } : t)));
	}
	const done = todo.done ? 'line-through' : '';
	return (
		<li className="flex w-1/2 justify-between items-center text-xl capitalize bg-slate-300 rounded p-2 h-14">
			<div className="flex items-center gap-2">
				<p className={`${done} cursor-pointer`} onClick={() => updateTodo(todo)}>
					{todo.name}
				</p>
				{todo.done ? <p className="text-green-700 bg-green-300 rounded px-2 py-1 font-bold">Done</p> : ''}
			</div>
			<button onClick={() => deleteTodo(todo)} className="flex justify-center items-center w-6 h-6 bg-red-400 rounded">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-700">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
		</li>
	);
}
