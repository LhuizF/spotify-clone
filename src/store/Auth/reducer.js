const inicialState = {
    access_token: '',
    refresh_token: ''
};

function AuthReducer(state = inicialState, action) {
    switch (action.type) {
        case 'NEW_TOKEN': {
            const newState = { ...inicialState };
            newState.access_token = action.payload.access_token;
            newState.refresh_token = action.payload.refresh_token;
            return newState;
        }

        case 'RESET_USER': {
            const newState = { ...inicialState };
            return newState;
        }

        default:
            return state;
    }
}

export default AuthReducer;
