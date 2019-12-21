import {combineReducers} from 'redux';
import { ADD,OUT } from './action-types'

const productList = [
    {"id": 1, "title": "联想小新Air4 R5", "price": 4199, "inventory": 23},
    {"id": 2, "title": "华为MateBook 13", "price": 5199, "inventory": 37},
    {"id": 3, "title": "戴尔G3游戏本 i5", "price": 6298, "inventory": 15}
]
function products(state = productList,action){
    switch(action.type){
        case ADD :
            let newState = JSON.parse(JSON.stringify(state))
            newState.map(product => product.id===action.data.id&&product.inventory>0? product.inventory-- :product)
            return newState
        default:
            return state
    }
}
const cartList = []
function cart(state = cartList,action){
    switch(action.type){
        case ADD :
            let list = {...action.data,...{"inventory":1}}
            let newState = JSON.parse(JSON.stringify(state))
            if(state!==0){
                for(let index=0;newState.length>index;index++){
                    if(newState[index].id===list.id){
                        newState[index].inventory++
                        return newState
                    }
                }
                return newState.concat(list)
            }else{
                return state.concat(list)
            }
        case OUT :
            return action.data
        default:
            return state
    }
}
    


export default combineReducers({
    products,
    cart
});