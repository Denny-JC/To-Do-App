import { ADD_TASK, DELETE_TASK } from '../actions/types';

const initialState = {
  taskList: []
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: state.taskList.concat({
          key: Math.random(),
          name: action.data
        })
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((item) =>
          item.key !== action.key)
      };
    default:
      return state;
  }
}

export default taskReducer;