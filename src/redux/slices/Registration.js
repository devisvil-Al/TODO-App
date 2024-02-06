import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    confirmPassword : '',
    disableBtn : true
}

export const registrationSlice = createSlice({
    name : 'RegSlice',
    initialState,
    reducers : {
        disable: (state, action) => {
           return state = {...initialState, disableBtn : action.payload}
        },
        setConfirm : (state, action) => {
            return state = {...initialState, confirmPassword : action.payload}
        }
    }
})

export const {disable, setConfirm} = registrationSlice.actions
export default registrationSlice.reducer