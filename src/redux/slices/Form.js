import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    view : false,
    editTask : {},
    formComponent : {}
}


export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        sendTodoId: (state, action) => {
            return state = {...initialState, editTask: action.payload}
        }
    }
})

export const { sendTodoId } = formSlice.actions
export default formSlice.reducer