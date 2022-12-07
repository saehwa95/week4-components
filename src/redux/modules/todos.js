//액션
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const GET_TODO = "GET_TODO";
const UPDATE_BUTTON = "UPDATE_BUTTON";

// 액션 크리에이터
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const getTodo = (payload) => {
  return {
    type: GET_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_BUTTON,
    payload,
  };
};

// 초기값
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트",
      content: "리액트 기초를 공부합시다.",
      isDone: false,
    },
  ],
};

// 리듀서
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return { todos: [...state.todos, action.payload] };
    }

    case DELETE_TODO: {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }

    case UPDATE_BUTTON: {
      return {
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, isDone: !todo.isDone }
            : todo;
        }),
      };
    }

    case GET_TODO: {
      return {
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    }

    default:
      return state;
  }
};

export default todosReducer;
