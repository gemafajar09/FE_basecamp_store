export const MODAL = "MODAL"
export const MODAL_VIEW = "MODAL_VIEW"

const initialState = {
    aksi : false,
    view : false
}

const ModalReducer = (state = initialState, action) => {
        switch (action.type) {
            case MODAL:
                    return {
                    ...state,
                    aksi : !state.aksi
                }
            case MODAL_VIEW:
                return {
                    ...state,
                    view : !state.view
                }
            default:
                return state

        }
}

export default ModalReducer