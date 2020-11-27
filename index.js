import { createStore } from 'redux'

const data = {
    itemList: [false, false, false, false, false, false, false, false]
}

const setItemEnable = article => ({type:"setItemEnable", payload:article})
const setIndexItem  = article => ({type:"setIndexItem", payload:article})

const rootReducer = (state = data, action) => {
    switch(action.type){
        case "setItemEnable":
            return {...state, itemList: action.payload}
        case "setIndexItem":
            return {...state, itemList: 
                state.itemList.map((value, i) => 
                                    i===action.payload.index ? action.payload.value : value) }
        default:
            return state
    }
}

const store = createStore(rootReducer)

window.setItemEnable = setItemEnable

export { store, setItemEnable, setIndexItem }