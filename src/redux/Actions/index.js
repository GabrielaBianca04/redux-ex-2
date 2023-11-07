export const SEARCH_RESULT = 'SEARCH_RESULT'
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'


export const searchResultAction = (job) => {
    return{
        type: SEARCH_RESULT
    }
}

export const addToFavouriteAction = (jobSelected) => {
    return{
        type: ADD_TO_FAVOURITE,
        playload: {jobSelected}
    }
}

export const removeFromFavouriteAction = (jobSelected) => {
    return{
        type: removeFromFavouriteAction,
        playload: {jobSelected}
    }
}