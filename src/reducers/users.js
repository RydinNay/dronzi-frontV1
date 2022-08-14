const initialState = {user:JSON.parse(sessionStorage.getItem("user")), isAuth:JSON.parse(sessionStorage.getItem("isAuth")), isAdmin:JSON.parse(sessionStorage.getItem("isAdmin")), 
isUser:JSON.parse(sessionStorage.getItem("isUser")), selectedUser:[]}


export default function users(state = initialState, action) {
    const { type, payload, isAuth, isAdmin, isUser } = action;

    switch (type) {
        case 'POST_USER':
            return {
                ...state,
                user: payload,
                isAuth: isAuth,
                isAdmin: isAdmin,
                isUser: isUser
            }
        
        case 'LOGOUT':
            return{
                ...state,
                user: null,
                isAuth: false,
                isAdmin: false,
                isUser: false
            }
        
        case 'SELECT_USER':
            return{
                ...state,
                selectedUser: payload
            }
        
        
        default:
            return state;
    }
}