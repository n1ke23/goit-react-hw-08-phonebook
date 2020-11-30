import axios from 'axios';
import actionsAuth from './actionsAuth';
import { fetchContactsSuccess } from "./../actions/actionsContacts";
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => dispatch => {
    dispatch(actionsAuth.registerRequest());
    axios
        .post('/users/signup', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(actionsAuth.registerSuccess(response.data));
        })
        .catch(error => dispatch(actionsAuth.registerError(error)));
};

const logIn = credentials => dispatch => {
    dispatch(actionsAuth.loginRequest());
    axios
        .post('/users/login', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(actionsAuth.loginSuccess(response.data));
        })
        .catch(error => dispatch(actionsAuth.loginError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }
    token.set(persistedToken);
    dispatch(actionsAuth.getCurrentUserRequest());
    axios
        .get('/users/current')
        .then(({ data }) => dispatch(actionsAuth.getCurrentUserSuccess(data)))
        .catch(error => actionsAuth.getCurrentUserError(error));
};

const logOut = () => async dispatch => {
    dispatch(actionsAuth.logoutRequest());
    await axios
        .post('/users/logout')
        .then(() => {
            token.unset();
            dispatch(fetchContactsSuccess())
            dispatch(actionsAuth.logoutSuccess());
        })
        .catch(error => dispatch(actionsAuth.logoutError(error)));
};
export default { register, logOut, logIn, getCurrentUser };