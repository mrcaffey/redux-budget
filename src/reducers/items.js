import axios from 'axios'
const ITEMS = 'ITEMS'
const ADD_ITEM = 'ADD_ITEM'

export const getItems = () => {
  return (dispatch) => {
    axios.get('/api/items')
      .then( res => dispatch({ type: ITEMS, items: res.data }) )
  }
}

export const addItem = (item) => {
  return (dispatch) => {
    axios.post('/api/items', { item })
     .then( res => dispatch({ type: ADD_ITEM, item: res.data }) )
  }
}

export default ( state = [], action ) => {
  switch (action.type) {
    case ITEMS:
      return action.items
    case ADD_ITEM:
      return [...state, action.item]
    default:
      return state
  }
}