import Form from './Form';
import Todolist from './Todolist';
import { useState } from 'react';
import TodoCounter from './TodoCounter';
export default function Todo() {
	const [todos, setTodos] = useState([]);
	const completedTodos = todos.filter((todo) => todo.done).length;
	return (
		<div className="flex flex-col w-1/2 mx-auto bg-slate-400 text-slate-800 mt-4 p-4 gap-4 rounded">
			<Form todos={todos} setTodos={setTodos} />
			<Todolist todos={todos} setTodos={setTodos} />
			<TodoCounter completedTodos={completedTodos} TotalTodos={todos.length} />
		</div>
	);
}
