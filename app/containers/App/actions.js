export function loadIntialData(data) {
    return function (dispatch) {
        dispatch({
            type: 'LOAD_INTIAL_DATA',
            payload: data
        });
    }
}