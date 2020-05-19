/*
 * Home Actions
 *
 */
import axios from 'axios';
export function load_popular() {
  return {
    type: 'LOAD_POPULAR_LISTS'
  }
}

export function load_popular_success(data) {
  return function (dispatch) {
    return axios.get('https://api.irufit.com/lists?featured=true').then(response => {
      dispatch({
        type: 'LOAD_POPULAR_LISTS_SUCCESS',
        data: response.data
      })
    });
  }
}
export function load_popular_error(error) {
  return {
    type: 'LOAD_POPULAR_LISTS_ERROR',
    error
  }
}