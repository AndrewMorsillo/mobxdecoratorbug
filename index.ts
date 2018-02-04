import {  observable, isObservable } from "mobx"

class TestStore{
    @observable data = new Data()
}

class Data{
    @observable _id: string
    @observable name: string
}

let test = new TestStore()
console.log("Test is observable ", test.data, isObservable(test.data))
