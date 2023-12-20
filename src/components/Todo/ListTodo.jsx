import React from 'react';
import { useSelector } from 'react-redux';

const ListTodo = () => {
	const { todos } = useSelector((state) => state.todos);

	return (
		<div className="w-full max-w-xs mt-5">
			{todos.map((todo) => (
				<div key={todo.id}>
					<span>{todo.value}</span>
					<button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
						Delete
					</button>
					<button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
						Update
					</button>
				</div>
			))}
		</div>
	);
};

export default ListTodo;
