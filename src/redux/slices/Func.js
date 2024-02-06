import { createSlice } from "@reduxjs/toolkit";

const theme = JSON.parse(localStorage.getItem('darkTheme'))

const initialState = {
    form : {
        str : '',
        function : null,
        attr : ''
    },
    darkTheme:{
        darkTheme : false,
        toggle : false
    },
    headerVisible : JSON.parse(localStorage.getItem('headerVisible')) || false,
    modalActive : false,
}

if(theme) {
    initialState.darkTheme = theme.theme
    initialState.toggle = theme.toggle
}

function saveLocal(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        showModal: (state, action) => {
            return {...state, form : action.payload}
        },
        hideModal: (state) => {
            return state
        },
        setModalActiveTrue : (state) => {
            return {...state, modalActive : true}
        },
        setModalActiveFalse : (state) => {
            return {...state, modalActive : false}
        },
        setDarkTheme : (state, action) => {
            saveLocal('darkTheme', {theme : !state.darkTheme, toggle : action.payload})
            return {...state, darkTheme : !state.darkTheme, toggle : action.payload}
        },
        visibleHeight : (state) => {
            saveLocal('headerVisible', !state.headerVisible)
            return {...state, headerVisible : !state.headerVisible}
        }
    }
})

export const {showModal, setModalActiveTrue, setModalActiveFalse, setDarkTheme, visibleHeight} = funcSlice.actions
export default funcSlice.reducer