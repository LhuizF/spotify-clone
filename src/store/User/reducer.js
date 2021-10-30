const inicialState = {
    login: '',
    id: '',
    email: '',
    country: '',
    profilePicture: ''
};

function UserReducer(state = inicialState, action) {
    switch (action.type) {
        case 'NEW_USER': {
            if (!action.payload.email) return;
            const newState = { ...inicialState };
            newState.login = action.payload.display_name;
            newState.id = action.payload.id;
            newState.email = action.payload.email;
            newState.country = action.payload.country;
            newState.profilePicture = action.payload.images[0].url;
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

export default UserReducer;
