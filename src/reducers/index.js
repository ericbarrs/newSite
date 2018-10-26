import { combineReducers } from 'redux';

const books = (state = [], action)=>{
  if(action.type === 'LOADEDBOOKS'){
    return state = action.payload
  }else{
  return state
  }
}

const rootReducer = combineReducers({
 books
})

export default rootReducer