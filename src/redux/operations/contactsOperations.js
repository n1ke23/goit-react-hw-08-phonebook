import axios from "axios";
import {
    addContactRequest,
    addContatSuccess,
    addContatError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from "../actions/actionsContacts";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const addContact = (obj) => async (dispatch) => {
    dispatch(addContactRequest());

    await axios
        .post("contacts", obj)
        .then(({ data }) => dispatch(addContatSuccess(data)))
        .catch((error) => dispatch(addContatError(error)));
};

export const fetchContacts = () => async (dispatch) => {
    dispatch(fetchContactsRequest());

    await axios
        .get("contacts")
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch((error) => dispatch(fetchContactsError(error)));
};

export const deleteContact = (id) => async (dispatch) => {
    dispatch(deleteContactRequest());

    await axios
        .delete(`contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch((error) => dispatch(deleteContactError(error)));
};

