import { ADD,OUT } from './action-types'

export const addtocart = (product) => ({type:ADD,data:product})
export const checkout = () => ({type:OUT,data:[]})