import axios from 'axios';
export function load_details() {
    return {
        type: 'LOAD_DETAILS'
    }
}
function convertCase(str) {
    let splitStr = str.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
export function load_details_success(querystring) {
    let locality = querystring.pathname.split('/')[2];
    let center = querystring.pathname.split('/')[4];
    locality = locality.split('-').join(' ');
    center = center.split('-').join(' ');
    locality = convertCase(locality);
    center = convertCase(center);
    let search_url = querystring.pathname.replace(/\//g, '%2F');
    // 'https://api.irufit.com/lists?title=' + center + '&locality.title=' + locality
    return function (dispatch) {
        return axios.get('https://api.irufit.com/lists?search_url=' + search_url).then(response => {
            dispatch({
                type: 'LOAD_DETAILS_SUCCESS',
                data: response.data[0]
            })
        });
    }
}
export function load_details_error(error) {
    return {
        type: 'LOAD_DETAILS_ERROR',
        error
    }
}

export function claim_business(data) {
    let _id = data._id.value;


    return function (dispatch) {
        return axios.put('https://api.irufit.com/lists/' + _id, {
            "seller_name": data.username.value,
            "mobile": data.mobile.value,
            "email": data.email.value,
            "claimed": true,
            "message": data.message.value
        }).then(function (response) {
            dispatch({
                type: 'LOAD_DETAILS_SUCCESS',
                data: response.data
            })
        });
    }
}