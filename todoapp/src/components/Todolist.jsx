import Todoitem from './Todoitem';

export default function Todolist({ todos, setTodos }) {
	const sortedTodos = todos.slice().sort((a, b) => a.done - b.done);
	return (
		<ul className="flex flex-col gap-2 select-none">
			{sortedTodos.map((todo, index) => (
				<Todoitem key={`${todo.name} ${index}`} index={index} todo={todo} todos={todos} setTodos={setTodos} />
			))}
		</ul>
	);
}
