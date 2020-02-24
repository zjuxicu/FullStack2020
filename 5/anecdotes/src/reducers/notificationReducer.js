
const initialState = ''

export const notification = notification => {
    return {
        type: 'NOTIFY',
        notification
    }
}

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTIFY':
            return action.notification

        default:
            return state
    }
}
export default { notificationReducer, notification }