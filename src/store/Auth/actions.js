export function NewToken(payload) {
    return {
        type: 'NEW_TOKEN',
        payload
    };
}

export function ResetToken() {
    return {
        type: 'RESET_TOKEN',
        payload
    };
}
