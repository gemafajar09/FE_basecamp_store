import http from "./configAxios";

export const ADD_CART = "ADD_CART"
export const GET_CART = "GET_CART"

let token = localStorage.getItem('token');
export const AddCart = (id_produk,jumlah,tanggal,id_user) => async (dispatch) => {
    let dataJson = {
        id_produk:id_produk,
        jumlah:jumlah,
        tanggal:tanggal,
        id_user:parseInt(id_user)
    }

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

        if(res.data === true)
        {
            window.location="/"
        }
    } catch (err) {
        Promise.reject(err);
    }
}

export const AksiKeranjang = (id,jumlah,kode) => async (dispatch) => {
    let dataJson = {
        id:id,
        jumlah:jumlah,
        kode:kode
    }

    try {
        const res = await http.post("/auth/CartAksi",
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

export const getCart = (id) => async (dispatch) => {
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