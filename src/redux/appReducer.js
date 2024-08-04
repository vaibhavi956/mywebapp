 import { appInit } from "./init"
 
 
 export const appReducer=(state = appInit, action)=>{
    switch (action.type) {
        case 'UPDATE_PHOTOS':
            return {
                ...state,
                photos: action.payload
            }
    }
    return state;

}