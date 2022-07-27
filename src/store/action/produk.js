import http from './configAxios'

export const GET_PRODUK = "GET_PRODUK"
export const GET_PRODUK_DETAIL = "GET_PRODUK_DETAIL"
export const getProduk = () =>  {
  return (dispatch) => {
      http.get('api/getProduk')
      .then(function(res){
        dispatch({
          type: GET_PRODUK,
          data : res.data,
          loading : false
        })
      })
      .catch(function(err){
        console.log(err)
      })
    }

}

