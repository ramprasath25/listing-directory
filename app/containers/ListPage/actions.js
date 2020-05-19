import axios from 'axios';
import queryString from 'query-string';
import { categories } from '../HomePage/const';

export function load_lists() {
    return {
        type: 'LOAD_LISTS'
    }
}

function convertCase(str) {
    let splitStr = str.split('-');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

export function load_lists_success(data, querystring) {
    let location = querystring.pathname.split('/')[1];
    location = convertCase(location);
    let params = queryString.parse(querystring.search)
    let page = (params.start) ? (parseInt(params.start) - 1) * 10 : 0;
    let pathname = querystring.pathname.split('/');
    let locality = '';
    let category;
    category = querystring.pathname.split('/')[2];
    if (pathname.length > 3) {
        let url_locality = convertCase(pathname[2]);
        locality = '&locality.title=' + url_locality;
        category = querystring.pathname.split('/')[3];
    }
    let sel_cat = categories.filter(cat => {
        if (cat.path === category) return true
    });
    if (pathname.length > 2) {
        category = (sel_cat.length > 0) ? '&categories.title=' + convertCase(category) : '&locality.title=' + convertCase(category);
    } else {
        category = ''
    }
    let features = '';
    if (params.features) {
        let url_features = params.features.split(',');
        for (let i = 0; i < url_features.length; i++) {
            features += '&features.title=' + url_features[i];
        }
    }
    return function (dispatch) {
        return axios.get('https://api.irufit.com/lists?location.title=' + location + '&_start=' + page + '&_limit=10' + category + locality + features).then(response => {
            dispatch({
                type: 'LOAD_LISTS_SUCCESS',
                data: response.data
            })
        });
    }
}
export function load_lists_error(error) {
    return {
        type: 'LOAD_LISTS_ERROR',
        error
    }
}

export function load_location(data, querystring) {
    let location = querystring.pathname.split('/')[1].replace('_', ' ');
    location = location[0].toUpperCase().concat(location.slice(1));
    return function (dispatch) {
        return axios.get('https://api.irufit.com/cities?title=' + location).then(response => {
            let localities_data = response.data[0].localities;
            localities_data.map(localities => { localities['checked'] = false })
            dispatch({
                type: 'LOAD_LOCATION',
                data: localities_data
            })
        });
    }
}
export function load_tags(data, querystring) {
    return {
        type: 'LOAD_TAGS',
        data
    }
}
export function load_features(data, querystring) {
    return function (dispatch) {
        return axios.get('https://api.irufit.com/featuresonly').then(response => {
            let features_data = response.data;
            dispatch({
                type: 'LOAD_FEATURES',
                data: features_data
            })
        });
    }
}