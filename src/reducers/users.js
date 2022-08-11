const user = JSON.parse(sessionStorage.getItem("user"))

const initialState = user?
{
    isLoggedIn: true, user
    /*
    users: {
        user_id,
        user_name,
        user_email,
        user_tel,
        user_roleid,
        user_dronebaseid//,
        //user_token
    }
*/    
}
:{
    isLoggedIn: false, user: null
}

export default function users(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'Post_User':
            return {
                users: payload
            }
        
        case 'LOGOUT':
            return{
                users: null
            }
        
        default:
            return state;
    }
}