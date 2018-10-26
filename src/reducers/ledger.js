import axios from 'axios'
const ENTRIES = 'ENTRIES'
const ADD_ENTRY = 'ADD_ENTRY'
const REMOVE_ENTRY = 'REMOVE_ENTRY'

export const getEntries = () => {
  return (dispatch) => {
    axios.get('/api/entries')
      .then( res => dispatch({ type: ENTRIES, entries: res.data }) )
  }
}

export const addEntry = (entry) => {
  return (dispatch) => {
    axios.post('/api/entries', { entry })
      .then( res => dispatch({ type: ADD_ENTRY, entry }) )
  }
}

export const removeEntry = (id) => {
  return (dispatch) => {
    axios.delete(`/api/entries/${id}`)
      .then( res => dispatch({ type: REMOVE_ENTRY, id }) )
  }
}

export default ( state = [], action ) => {
  switch (action.type) {
    case ENTRIES:
      return action.entries
    case ADD_ENTRY:
      return [...state, action.entry]
    case REMOVE_ENTRY:
      return state.filter( (entry) => entry.id !== action.id )
    default:
      return state
  }
}
