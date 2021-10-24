import axios from "axios";
import {months} from "../../utils/months";

const SET_CONCERTS = 'SET_CONCERTS'
const IS_FAVOURITES = 'IS_FAVOURITES'
const IS_FAVOURITE = 'IS_FAVOURITE'

const initialState = {
    isFavourites: false,
    countItems: 0,
    cities: [],
    months: months,
    concerts: []
}

export const concertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONCERTS:

            const updConcerts = [...action.payload]
            for (let i = 0; i < updConcerts.length; i++) {
                updConcerts[i].isFavourite = false
            }
            return {
                ...state,
                countItems: action.payload.length,
                cities: [...new Set(action.payload.map(item => item.city))],
                concerts: updConcerts
            }
        case IS_FAVOURITES:
            return {
                ...state,
                isFavourites: action.isFavourites
            }
        case IS_FAVOURITE:
            return {
                ...state,
                concerts: [...state.concerts].map(concert => {
                    if (concert.id === action.idCard) {
                        return {
                            ...concert,
                            isFavourite: action.isFavourite
                        }
                    }
                    return concert
                })
            }
        default:
            return state
    }
}

const setConcertsAC = (payload) => ({type: SET_CONCERTS, payload})
export const isFavouritesAC = (isFavourites) => ({type: IS_FAVOURITES, isFavourites})
export const isFavouriteAC = (idCard, isFavourite) => ({type: IS_FAVOURITE, idCard, isFavourite})

export const getConcerts = () => {
    return async (dispatch) => {
        const response = await axios.get('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
        console.log(response.data)
        dispatch(setConcertsAC(response.data))
    }
}