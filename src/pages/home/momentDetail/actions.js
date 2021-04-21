import axios from "axios";

const base_url = process.env.REACT_APP_URL_API;

export async function getPeople(id = '', dispatch) {
    try {
        const response = await axios.get(base_url + '/people/' + id)
        dispatch({type: 'GET_PEOPLE', payload: response})
    } catch (error) {
        console.log(error)
    }
}