import axios from "axios";
import {months} from "../../utils/months";

const SET_CONCERTS = 'SET_CONCERTS'
const IS_FAVOURITES = 'IS_FAVOURITES'
const IS_FAVOURITE = 'IS_FAVOURITE'
const FILTERED_ITEMS = 'FILTERED_ITEMS'
const ADD_FILTER = 'ADD_FILTER'


const initialState = {
    listFilters : {
        'city': [],
        'month': [],
        'isFavourite': []
    },
    cities: [],
    isFavourites: false,
    concerts: [],
    filterConcerts: []
}

export const concertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONCERTS:

            const updConcerts = [...action.data]
            if (action.isNewData) {
                for (let i = 0; i < updConcerts.length; i++) {
                    updConcerts[i].isFavourite = false
                }
            }
            return {
                ...state,
                cities: [...new Set(action.data.map(item => item.city))],
                concerts: updConcerts,
                filterConcerts: updConcerts
            }
        case IS_FAVOURITES:
            return {
                ...state,
                isFavourites: !state.isFavourites,
            }

        case IS_FAVOURITE:

            const setFavourite = (concert) => {
                if (concert.id === action.idCard) {
                    return {
                        ...concert,
                        isFavourite: action.isFavourite
                    }
                }
                return concert
            }

            return {
                ...state,
                concerts: [...state.concerts].map(concert => {
                    return setFavourite(concert)
                }),
                filterConcerts: [...state.filterConcerts].map(concert => {
                    return setFavourite(concert)
                }),
            }

        case FILTERED_ITEMS:
            return {
                ...state,
                filterConcerts: action.items,
            };

        case ADD_FILTER:
            return {
                ...state,
                listFilters: {...action.payload.listFilters}
            }

        default:
            return state
    }
}

export const setIsFavourites = () => ({type: IS_FAVOURITES})
const setConcertsAC = (data, isNewData = true) => ({type: SET_CONCERTS, data, isNewData})
export const isFavouriteAC = (idCard, isFavourite) => ({type: IS_FAVOURITE, idCard, isFavourite})
const setFilteredItems = (items) => ({type: FILTERED_ITEMS, items})

export const changeFilters = (type, value, listFilters) => {
    return (dispatch) => {
        if (!value){
            listFilters[type] = []
        } else listFilters[type] = [value]
        dispatch({
            type: ADD_FILTER,
            payload: {
                type: type,
                value: value,
                listFilters: listFilters
            },
        });

    }
}


export const filterItems = (concerts, filters) => {
    return (dispatch) => {

        var keys = Object.keys(filters);
        const filteredItems = concerts.filter(function (obj) {
            return keys.every(function (key) {
                if (!filters[key].length) {
                    return true;
                } else if (key === 'month') {
                    let month = obj['date'].split('.')[1]
                    return filters[key].includes(month);
                }
                return filters[key].includes(obj[key]);
            });
        });
        dispatch(setFilteredItems(filteredItems))


    }

}

export const getConcerts = () => {
    return async (dispatch) => {
        const data = localStorage.getItem('concerts')
        if (data) {
            dispatch(setConcertsAC(JSON.parse(data), false))
        } else {
           const response = await axios.get('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
            dispatch(setConcertsAC(response.data))
        }

    }
}