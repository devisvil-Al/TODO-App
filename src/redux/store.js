import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./slices/Registration";
import { setupListeners } from "@reduxjs/toolkit/query";

import todoSlice from "./slices/Todo";
import userSlice  from "./slices/User";
import formSlice from "./slices/Form";
import funcSlice from "./slices/Func";
import { userApi } from "./query/user";
import { apiTask } from "./query/task";

const store = configureStore ({
    reducer : {
        funcSlice,
        todoSlice,
        userSlice,
        registrationSlice,
        formSlice,
        [userApi.reducerPath]: userApi.reducer, // передаем состояние
        [apiTask.reducerPath]: apiTask.reducer
    },
    middleware : (getDefaultMiddleware) => { // прописываем middleware - связующее ПО для обмена запросами между приложением и сервером
        return getDefaultMiddleware().concat( // используем getDefaultMiddleware для добавления собственного промежуточного ПО
            userApi.middleware, // передаем наше состояние
            apiTask.middleware,
        )
    }
})
setupListeners(store.dispatch); 
export {store}


