import { SEARCH_RESULT } from "../Actions"



const initialState = {
  favourite: {
    list: [],
  results: {
      list: [],
    },
  },
}


const bigReducer= combineReducers ({
  main: mainReducer,
  results: resultReducer
})

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      }
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      }
    default:
      return state
  }
}

const resultReducer = (state = initialState, action) =>{
  switch (action.type) {
    case 'SEARCH_RESULT':
      return {
        ...state,
        results: {
          ...state.results,
          list: [...state.results.list, action.payload],
        },
      }}

  }

export default mainReducer
export {resultReducer}
