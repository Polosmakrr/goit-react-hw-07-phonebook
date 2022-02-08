import { createAction } from "@reduxjs/toolkit"

export const fetchContactsRequest = createAction('fetchRequest');
export const fetchContactsSuccess = createAction('fetchSuccess');
export const fetchContactsError = createAction('fetchError');

export const addContactRequest = createAction('addRequest');
export const addContactSuccess = createAction('addSuccess');
export const addContactError = createAction('addError');

export const deleteContactRequest = createAction('deleteRequest');
export const deleteContactSuccess = createAction('deleteSuccess');
export const deleteContactError = createAction('deleteError');


export const changeFilter = createAction('changeFilter');

