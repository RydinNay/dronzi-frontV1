import { makeAutoObservable } from "mobx"

class DronStore {
    constructor() {
        this._allDron = []
        this._selectedDron = []
        makeAutoObservable(this)
    }
    
    setAllDron(allDron) {
        this._allDron = allDron
    }

    setSelectedDron(selectedDron) {
        this._selectedDron = selectedDron
    }
    
    get allDron(){
        return this._allDron
    }

    get selectedDron(){
        return this._selectedDron
    }

    /*get isAuth(){
        return this._isAuth
    }*/

    
}

const dronStore = new DronStore();

export default dronStore;