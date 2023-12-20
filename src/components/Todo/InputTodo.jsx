import React from 'react';

const InputTodo = () => {
	return (
		<div className="w-full max-w-xs flex justify-center text-center items-center">
			<form action="">
				<input
					className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
					id="inline-full-name"
					type="text"
					value="Jane Doe"
				/>
				<button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Submit
				</button>
			</form>
		</div>
	);
};

export default InputTodo;
