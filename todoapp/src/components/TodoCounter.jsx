export default function TodoCounter({ completedTodos, TotalTodos }) {
	return (
		<div className="flex gap-4">
			<span className="text-xl font-bold">Todos: {TotalTodos}</span>
			<span className="text-xl font-bold">Done todos: {completedTodos}</span>
		</div>
	);
}
