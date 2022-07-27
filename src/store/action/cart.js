import http from "./configAxios";

export const ADD_CART = "ADD_CART"
export const GET_CART = "GET_CART"

let token = localStorage.getItem('token');
export const AddCart = (id_produk,jumlah,tanggal) => async (dispatch) => {
    let dataJson = JSON.stringify({
        id_produk,jumlah,tanggal
    })

    try {
        const res = await http.post("/auth/addCart",
        dataJson,
        {
            headers: {
                    Authorization: `Bearer ${token}`
                },
            withCredentials: true
        }
        )

        dispatch({
            type: ADD_CART,
            data: res.data
        })
    } catch (err) {
        Promise.reject(err);
    }
}

export const ShowCart = (id) => async (dispatch) => {
    try {
        const res = await http.get("/auth/getCart/"+id,
        {
            headers: {
                    Authorization: `Bearer ${token}`
                },
            withCredentials: true
        }
        )
        dispatch({
            type : GET_CART,
            data : res.data
        })
    } catch (err) {
        Promise.reject(err)
    }
}