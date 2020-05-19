function initReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_INTIAL_DATA':
            // window.localStorage.setItem("userprofile", JSON.stringify(action.payload))
            return action.payload
        default:
            return state;
    }
}

export default initReducer