// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  popularList: [{}]
};

function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_POPULAR_LISTS': {
      const new_state = {
        ...state,
        loading: true,
        error: false,
        popularList: {}
      }
      return new_state;
    }
    case 'LOAD_POPULAR_LISTS_SUCCESS': {
      const new_state = {
        ...state,
        loading: false,
        error: false,
        popularList: action.data
      }
      return new_state;
    }
    case 'LOAD_POPULAR_LISTS_ERROR':
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }

}
export default homepageReducer;