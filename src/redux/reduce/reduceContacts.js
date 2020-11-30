// import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import { ADD_CONTACT, REMOVE_CONTACT, FILTER_VALUE, FILTER_ARR, REMOVE_FILTER_ARR, NOTIFY, ADD_LOCAL_SOR, ERROR, REQUEST } from './../const/const'

const initialState = {
    contacts: {
        items: [],
        filter: '',
    },
    isContactLoading: false
};

export const reduceContacts = createReducer(initialState, {
    [ADD_CONTACT]: (state, { payload }) => {
        return {
            ...state,
            contacts: {
                ...state.contacts,
                items: [...state.contacts.items, payload],
            },
            isContactLoading: false
        }
    },

    [REMOVE_CONTACT]: (state, { payload }) => ({
        ...state,
        contacts: {
            ...state.contacts,
            items: state.contacts.items.filter(contact => contact.id !== payload),
        },
        isContactLoading: false
    }),
    [FILTER_VALUE]: (state, { payload }) => ({
        ...state,
        contacts: {
            ...state.contacts,
            filter: payload,
        },
    }),
    [FILTER_ARR]: (state, { payload }) => ({
        ...state,
        contacts: {
            ...state.contacts,
            filterItems: state.contacts.items.filter(el =>
                el.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
            ),
        },
    }),
    [REMOVE_FILTER_ARR]: (state, { payload }) => ({
        ...state,
        contacts: {
            ...state.contacts,
            filterItems: "",
        },
    }),
    [NOTIFY]: (state, { payload = false }) => ({
        ...state,
        contacts: {
            ...state.contacts,
            isNotify: payload,
        },
    }),
    [ADD_LOCAL_SOR]: (state, { payload }) => ({
        ...state,
        contacts: {
            ...state.contacts,
            items: [...payload],
        },
        isContactLoading: false
    }),
    [REQUEST]: (state) => ({
        ...state,
        isContactLoading: true
    }),
    [ERROR]: (state) => ({
        ...state,
        isContactLoading: false
    }),
})

    // const state = {
    //     contacts: [
    //         // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //         // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //         // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //         // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    //     ],
    //     filter: "",
    // }

    // const [obj, setObj] = useState({ ...state })
    // const addContact = async (user) => {
    //     if (obj.contacts.some((el) => el.name === user.name)) {
    //         reversNotifi()
    //         // alert(`${user.name} уже записанно, введите другое имя!`)
    //     } else {
    //         setObj((prev) => ({ ...prev, contacts: [...prev.contacts, { id: uuidv4(), ...user }] }))
    //         localStorage.setItem("contacts", JSON.stringify(obj.contacts))
    //     }
    // }
    // const delContact = (id) => {
    //     const contacts = obj.contacts.filter((el) => el.id !== id)
    //     setObj((prev) => ({ ...prev, contacts }))
    // }
    // const inputFilter = ({ target }) => {
    //     const { value, name } = target
    //     setObj((prev) => ({ ...prev, [name]: value }))
    // }