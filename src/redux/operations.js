import axios from 'axios';
import { fetchingInProgress, fetchingSuccess, fetchingRegected } from './contacts/slice';

axios.defaults.baseURL = 'https://6443bed2466f7c2b4b597f6e.mockapi.io/api/v1/';

export const fetchContacts = () => async dispatch => {
    try {
        dispatch(fetchingInProgress());
        const response = await axios.get('/contacts');
        dispatch(fetchingSuccess(response.data));
    } catch (error) {
        dispatch(fetchingRegected(error.message));
        console.log(error.message);
    }
};