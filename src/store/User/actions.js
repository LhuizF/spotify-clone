export function NewUser(payload) {
    return {
        type: 'NEW_USER',
        payload
    };
}

export function ResetUser() {
    return {
        type: 'RESET_USER',
        payload
    };
}
