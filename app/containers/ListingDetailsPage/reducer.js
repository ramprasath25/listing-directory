// The initial state of the App
export const initialState = {
    loading: false,
    error: false,
    currentUser: false,
    listDetailsData: {
        "title": "Sample data11",
        "tagline": "Sample Tag line",
        "description": "Sample description",
        "type": "Gym",
        "claimed": true,
        "sellerInfo": {
            "name": "Sample data",
            "verified": true,
            "address": "Sample Address",
            "telephone": "9876544454",
            "mail": "sample@sample.com",
            "website": "www.sample.com",
            "facebook": "www.facebook.com",
            "twitter": "www.twitter.com",
            "linkedin": "www.linkedin.com"
        },
        "features": [
            "Parking", "A/C", "Personal Trainer", "Locker"
        ],
        "latitude": "12.07",
        "longitude": "17.08",
        "tags": ["Gyms", "Training"],
        "businessHours": {
            "Monday": "10:00-06:00",
            "Tuesday": "10:00-06:30",
            "Wednesday": "09:00-05:00",
            "Thursday": "10:00-07:00",
            "Friday": "11:00-06:00"
        }

    },
};

function listDetails(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_DETAILS': {
            const new_state = {
                ...state,
                loading: true,
                error: false,
                listDetailsData: {}
            }
            return new_state;
        }
        case 'LOAD_DETAILS_SUCCESS': {
            const new_state = {
                ...state,
                loading: false,
                error: false,
                listDetailsData: action.data
            }
            return new_state;
        }
        case 'LOAD_DETAILS_ERROR':
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }

}
export default listDetails;