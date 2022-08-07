const initialState = {
    selectedTask: []
};

export default function tasks(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'PUT_SELECTED_TAKS':
            return {
                ...state,
                selectedTask: payload
            }
        default:
            return state;
    }
}