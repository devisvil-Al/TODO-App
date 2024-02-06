import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


export const apiTask = createApi({
    reducerPath : 'taskApi',
    baseQuery : fetchBaseQuery({
        baseUrl : "https://testapiservisefortesting.onrender.com/", 
    }),
    endpoints : (builder) => ({
        apiTodos: builder.query({
            query: () => ({
                url:'todo/todos',
                method: 'GET',
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
        }),
        deleteTodo: builder.mutation({
            query: (_id) => ({
                url: `todo/delete?id=${_id}`,
                method: 'DELETE',
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
        }),
        createTodo: builder.mutation({
            query: (body) => ({
                url: 'todo/create',
                method: 'POST',
                body : JSON.stringify(body),
                headers: {
                    'Content-Type' : 'application/json',
                    authorization : localStorage.getItem('token')
                }
            })
        }),
        checkedTodo: builder.mutation({
            query:(body) => ({
                url:`todo/patch?id=${body._id}`,
                method: 'PATCH',
                body : JSON.stringify({...body, completed : !body.completed}),
                headers: {
                    'Content-Type' : 'application/json',
                    authorization : localStorage.getItem('token')
                }
            })
        }),
        updateTodo: builder.mutation({
            query: (body) => ({
                url: `todo/patch?id=${body._id}`,
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

export const { useApiTodosQuery, useDeleteTodoMutation, useCreateTodoMutation, useCheckedTodoMutation, useUpdateTodoMutation } = apiTask;