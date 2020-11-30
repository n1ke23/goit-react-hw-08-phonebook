import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, REQUEST, ERROR, REMOVE_CONTACT, FILTER_VALUE, FILTER_ARR, REMOVE_FILTER_ARR, NOTIFY, ADD_LOCAL_SOR } from './../const/const'


export const addContactRequest = createAction(REQUEST);// добавить
export const addContatSuccess = createAction(ADD_CONTACT)
export const addContatError = createAction(ERROR)
export const fetchContactsRequest = createAction(REQUEST);
export const fetchContactsSuccess = createAction(ADD_LOCAL_SOR);
export const fetchContactsError = createAction(ERROR);

export const deleteContactRequest = createAction(REQUEST);// удалить
export const deleteContactSuccess = createAction(REMOVE_CONTACT);
export const deleteContactError = createAction(ERROR);

export const setIsNotify = createAction(NOTIFY);// алерт на задвоение
export const filterValue = createAction(FILTER_VALUE);// по чему ищем
export const filterArr = createAction(FILTER_ARR);// массив фильтров

export const removeFilterArr = createAction(REMOVE_FILTER_ARR);



