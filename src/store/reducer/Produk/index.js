import { 
    GET_PRODUK,
} from "../../action/produk"



const inisialState = {
    dataResult      : [],
    loadingResult   : true,
}

const ProdukReducer = (state = inisialState, action) => {
    switch (action.type) {
        case GET_PRODUK:
            return {
                ...state,
                dataResult      : action.data,
                loadingResult   : action.loading,
            }
        default:
            return state
    }
}

export default ProdukReducer