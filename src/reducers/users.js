const initialState = {
    users: [{email: "asd"}]
};

export default function users(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_PROFILE_INFO_SUCCESS':
            return {
                users: payload
            }
        
        default:
            return state;
    }
}