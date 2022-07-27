export const LIGHT = "LIGHT"
export const DARK = "DARK"

const initialState = {
    theme : 'dark'
}

const ThemeDark = (state = initialState, action) => {
    switch(action.type){
        case LIGHT:
            let light = document.querySelector('html')
            localStorage.setItem('theme', 'light')
            light.setAttribute('class', 'light')
            return {
                ...state,
                theme : 'light'
            }
        case DARK:
            let dark = document.querySelector('html')
            localStorage.setItem('theme', 'dark')
            dark.setAttribute('class', 'dark')
            return {
                ...state,
                theme : 'dark'
            }
        default :
            return state
    }
}

export default ThemeDark