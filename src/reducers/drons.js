const initialState = {
    allDrons: [],
    selectedDron: []
};

export default function drons(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'PUT_DRONS':
            return {
                ...state,
                allDrons: payload
            }
        case 'PUT_SELECTED_DRONS':
            return {
                ...state,
                selectedDron: payload
            }
        default:
            return state;
    }
}