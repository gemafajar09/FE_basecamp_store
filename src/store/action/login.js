import http from './configAxios'

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const GET_USER = "GET_USER"
export const REGISTER = "REGISTER"

const token = localStorage.getItem('token');

export const register = (nama,username,password) => async (dispatch) => {
    var register = {
        nama: nama,
        username: username,
        password: password
    }
    try {
    const res = await http.post("/api/register",register)
    if(res.data !== 'Error')
        {
            
            dispatch({
                type: 'MODAL'
            })
        }
    } catch (err) {
        Promise.reject(err)
    }
}

export const login = (username, password) =>  async(dispatch) => {
    var dataLogin = {
        username: username,
        password: password
    }

    try {
        const res = await http.post("api/login",dataLogin)
        
        if(res.data !== 'Error')
        {
            dispatch({
                type: LOGIN,
                token: res.data.token,
                id: res.data.id
            })
            dispatch({
                type: 'MODAL'
            })
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("id", res.data.id)
        }
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

export const getUser = () => async (dispatch) => {
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