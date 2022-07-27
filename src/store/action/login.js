import http from './configAxios'

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const GET_USER = "GET_USER"

let token = localStorage.getItem('token');

export const login = (username, password) =>  async(dispatch) => {
    var dataLogin = JSON.stringify({
        username,password
    })

    try {
        const res = await http.post("api/login",dataLogin)
        dispatch({
            type: LOGIN,
            data: res.data.token
        })
        dispatch({
            type: 'MODAL'
        })
    } catch (err) {
         return Promise.reject(err)
    }
}

export const Logout = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT,
        })
    }
}

export const getUSer = () => async (dispatch) => {
    try {
        const res = await http.get("auth/user",{
            headers: {
                    Authorization: `Bearer ${token}`
                },
            withCredentials: true,
        })
        dispatch({
            type: GET_USER,
            data: res.data
        })

    } catch (err) {
        console.log(err);
    }
}