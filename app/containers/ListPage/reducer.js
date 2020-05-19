// The initial state of the App
export const initialState = {
    loading: false,
    error: false,
    currentUser: false,
    listsData: [{}],
    listlocation: [],
    listTags: [],
    listFeatures: []
};

function listReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_LISTS': {
            const new_state = {
                ...state,
                loading: true,
                error: false,
                listsData: {}
            }
            return new_state;
        }
        case 'LOAD_LISTS_SUCCESS': {
            const new_state = {
                ...state,
                loading: false,
                error: false,
                listsData: action.data
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return new_state;
        }
        case 'LOAD_LISTS_ERROR':
            return { ...state, error: action.error, loading: false };
        case 'LOAD_LOCATION': {
            const new_state = {
                ...state,
                loading: false,
                error: false,
                listlocation: action.data
            }
            return new_state;
        }
        case 'LOAD_TAGS': {
            const new_state = {
                ...state,
                loading: false,
                error: false,
                listTags: action.data
            }
            return new_state;
        }
        case 'LOAD_FEATURES': {
            const new_state = {
                ...state,
                loading: false,
                error: false,
                listFeatures: action.data
            }
            return new_state;
        }
        default:
            return state;
    }

}
export default listReducer;