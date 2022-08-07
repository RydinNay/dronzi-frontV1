import { makeAutoObservable } from "mobx"

class UserStore {
    constructor() {
        this._isAuth = true
        this._isUser = false
        this._isAdmin = false
        this._user = {}
        makeAutoObservable(this)
    }
    
    setIsAuth(bool) {
        this._isAuth = bool
    }

    setIsUser(bool) {
        this._isUser = bool
    }

    setIsAdmin(bool) {
        this._isAdmin = bool
    }

    setUser(user){
        this._user = user
    }
    
    get isAuth(){
        return this._isAuth
    }

    get isUser(){
        return this._isUser
    }

    get isAdmin(){
        return this._isAdmin
    }

    /*get isAuth(){
        return this._isAuth
    }*/

    
}

const store = new UserStore();

export default store;