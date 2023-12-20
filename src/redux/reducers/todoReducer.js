const initalState = {
	todos: [
		{
			id: 1,
			value: 'Belajar React',
		},
		{
			id: 2,
			value: 'Belajar Redux',
		},
	],
};

function todoReducer(state = initalState, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
			};
		default:
			return state;
	}
}

export function addTodo(input) {
  return {
    type: 'ADD_TODO',
    payload: input
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: id,
  }
}

export default todoReducer;
