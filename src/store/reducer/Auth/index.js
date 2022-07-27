import {
    LOGIN,
    LOGOUT,
    GET_USER
} from "../../action/login"

const token = localStorage.getItem("token")
const inisialState = {
    token: token ? token : "",
    dataUser : []
}

const AuthReducer = (state = inisialState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("token", action.data)
            return {
                ...state,
                token: action.data,
            }
        case LOGOUT :
            return {
                ...state,
                token: "",
                dataUser: []
            }
            case GET_USER :
            return {
                ...state,
                dataUser: action.data
            }
        default:
            return state
        }
        
}

export default AuthReducer