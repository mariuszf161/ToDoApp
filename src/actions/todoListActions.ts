import * as actionTypes from './types/todolistTypes';
import { ISingleElementList } from '../enitities/todoSingleEL';

export const setNewElemTodoList = (newElem: ISingleElementList) => ({
    type: actionTypes.SET_NEW_ELEM,
    newElem,
})


export const removeElemTodoList = (id: number) => ({
    type: actionTypes.REMOVE_ELEM,
    id
})
