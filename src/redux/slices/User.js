import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    name:  '',
    avatar :  ''
}

if(user) {
    initialState.name = user.name
    initialState.avatar = user.avatar
}

function saveLocal(obj) {
    localStorage.setItem('user', JSON.stringify(obj))
}

export const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        addUser:(state, action) => {
            saveLocal(action.payload)
            return state = action.payload
        },
        userLogout: (state) => {
            localStorage.clear()
            return state = {...initialState, name : ''}
        },
        patchName: (state, action) => {
            saveLocal(action.payload)
            const { name, avatar } = action.payload.data
            return {...initialState, name, avatar}
        }
    }
})
export const {addUser, userLogout, patchName} = userSlice.actions
export default userSlice.reducer
