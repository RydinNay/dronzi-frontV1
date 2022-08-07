const initialState = {
    selectedTaks: []
};

export default function tasks(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'PUT_SELECTED_TAKS':
            return {
                ...state,
                selectedTaks: payload
            }
        default:
            return state;
    }
}