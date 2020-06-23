import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList } from '../enitities/todoSingleEL';

export interface ITodoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: []
});

export default (state = defaultState(), action: any): ITodoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElem]
            };
        }
        case actionTypes.REMOVE_ELEM: {
            return{
                ...state,
                todoList: state.todoList.filter(el => el.id !== action.id)
            }
            
        }
        default: {
            return state;
        }
    }
};