export * from './footer.jsx'
export * from './counters.jsx'
export * from './FooterButtons.jsx'
export * from './Pic_Area.jsx'

import { createStore } from 'redux'

const data = {
    itemList: [false, false, false, false, false, false, false, false]
}

const setItemEnable = article => ({type:"setItemEnable", payload:article})

const rootReducer = (state = data, action) => {
    switch(action.type){
        case "setItemEnable":
            return {...state, itemList: action.payload}
        default:
            return state
    }
}

const store = createStore(rootReducer)

window.store = store
window.setItemEnable = setItemEnable

export { store }