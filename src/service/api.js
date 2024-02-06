class Api {
    constructor() {
        this.url = 'https://testapiservisefortesting.onrender.com/'
    }

    // apiUpdateTodo(body) {
    //     return fetch(this.url + `todo/patch?id=${body._id}`, {
    //         headers : {
    //             'Content-Type' : 'application/json',
    //             authorization : localStorage.getItem('token')
    //         },
    //         method : 'PATCH',
    //         body : JSON.stringify(body)
    //     }).then(responce => responce.json())
    // }

    // apiUpdateName(body) {
    //     return fetch(this.url + `user/me`, {
    //         headers : {
    //             'Content-Type' : 'application/json',
    //             authorization : localStorage.getItem('token')
    //         },
    //         method : 'PATCH',
    //         body : JSON.stringify(body)
    //     }).then(responce => responce.json())
    // }

    // apiUpdateAvatar(body){
    //     return fetch(this.url + `user/avatar`, {
    //         headers : {
    //             'Content-Type' : 'application/json',
    //             authorization : localStorage.getItem('token')
    //         },
    //         method : 'PATCH',
    //         body : JSON.stringify(body)
    //     }).then(responce => responce.json())
    // }

    // apiLogin(body){
    //     return fetch(this.url + 'user/signIn', {
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         },
    //         method : 'POST',
    //         body : JSON.stringify(body)
    //     }).then(responce => responce.json())
    // }

    // apiChecked(body) {
    //     return fetch(this.url + `todo/patch?id=${body._id}`, {
    //         headers : {
    //             'Content-Type' : 'application/json',
    //             authorization : localStorage.getItem('token')
    //         },
    //         method : 'PATCH',
    //         body : JSON.stringify({...body, completed : !body.completed})
    //     }).then(responce => responce.json())
      
    // }

    // apiLogout(){
    //     return fetch(this.url + 'user/signout', {
    //         headers : {
    //             'Content-Type' : 'application/json',
    //             authorization : localStorage.getItem('token')
    //         },
    //         method : 'POST',
    //     })
    // }
}

const api = new Api()
export default api