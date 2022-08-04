import {
    LOGIN,
    LOGOUT,
    GET_USER
} from "../../action/login"

const token = localStorage.getItem("token")
const id = localStorage.getItem("id")
const inisialState = {
    token: token ? token : "",
    id: id ? id : "",
    dataUser : {}
}

const AuthReducer = (state = inisialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.token,
                id: action.id,
            }
            case LOGOUT :
                return {
                ...state,
                token: "",
                id: "",
                dataUser : {}
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