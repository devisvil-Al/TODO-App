import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'; // импортируем методы для работы


export const userApi = createApi({
    reducerPath: "userApi", // прописываем название для стейта
    baseQuery : fetchBaseQuery({ // настройки базового взаимодействия
        baseUrl : "https://testapiservisefortesting.onrender.com/", // указываем url сервера, который мы используем
    }),
    endpoints : (builder) => ({ // передаем эндпоинты(конечные точки) - шлюзы(серверные процессы с внешним интерфейсом) - результат обработки промиса
        getUserData : builder.query({ // используем конструктор запросов
            query : () => ({ // делаем запрос
                url : "user/me", // прописываем путь на сервер через url 
                method : "GET", //прописываем метод запроса
                headers : {
                    authorization : localStorage.getItem("token") // авторизация - передаем token в localStorage
                }
            })
        }),
        userLogout : builder.mutation({
            query : () => ({
                url : 'user/signout',
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                    authorization : localStorage.getItem('token')
                }
            })
        }),
        userLogin : builder.mutation({
            query : (body) => ({
                url : 'user/signIn',
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(body),
            })
        }),
        updateUserName : builder.mutation({
            query : (body) => ({
                url : `user/me`,
                method : 'PATCH',
                body : JSON.stringify(body),
                headers : {
                    'Content-Type' : 'application/json',
                  authorization : localStorage.getItem('token')
                }
            })
        }),
        updateUserAvatar : builder.mutation({
            query: (body) => ({
                url: `user/avatar`,
                method: 'PATCH',
                body : JSON.stringify(body),
                headers: {
                    'Content-Type' : 'application/json',
                    authorization : localStorage.getItem('token')
                }
            })
        })
    })
})

export const { useGetUserDataQuery, 
                useUserLogoutMutation, 
                useUserLoginMutation, 
                useUpdateUserNameMutation, 
                useUpdateUserAvatarMutation } = userApi // экспортируем метод
                console.log(userApi);