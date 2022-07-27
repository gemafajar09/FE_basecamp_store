export const MODAL = "MODAL"

const initialState = {
    aksi : false
}

const ModalReducer = (state = initialState, action) => {
        switch (action.type) {
            case MODAL:
                    return {
                    ...state,
                    aksi : !state.aksi
                }
            default:
                return state

        }
}

export default ModalReducer