const initialState = {
    selectedDronsOnTasks: [],
    selectedDron: [],
    selectedTask: []
};

export default function drons_on_tasks(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'PUT_SELECTED_DRONS_ON_TASKS':
            return {
                ...state,
                selectedDronsOnTasks: payload
            }
        case 'PUT_SELECTED_DRONS':
            return {
                ...state,
                selectedDron: payload
            }
        case 'PUT_SELECTED_TASK':
            return {
                ...state,
                selectedTask: payload
            }
        default:
            return state;
    }
}