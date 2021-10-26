import {months} from "../../../utils/months";
import notFavorites from "../../../images/notfavorites.svg";
import {useSelector} from "react-redux";
import {useActions} from "../../../hooks/useActions";
import {useEffect} from "react";
import './filters.scss'

export const Filters = () => {
    const {
        cities, isFavourites,
        concerts, listFilters
    } = useSelector(state => state.concert)

    const {filterItems, changeFilters, setIsFavourites} = useActions()

    useEffect(() => {
        filterItems(concerts, listFilters)
    }, [listFilters])

    const acceptFilter = (type, value) => {
        changeFilters(type, value, listFilters)
    }

    const changeIsFavourites = (type, value) => {
        setIsFavourites()
        acceptFilter(type, value)
    }

    return (
        <div className="filters">
            <div>
                <span className="selectorText">City:</span>
                <select onChange={e => {
                    acceptFilter('city', e.target.value)
                }} className="select selectorText" defaultValue="">
                    <option value=""></option>
                    {cities.map(city => {
                        return <option key={city} value={`${city}`}>{city}</option>
                    })
                    }
                </select>
            </div>
            <div>
                <div>
                    <span className="selectorText">Month:</span>
                    <select onChange={e => {
                        acceptFilter('month', e.target.value)
                    }} className="select selectorText" defaultValue="">
                        <option value=""></option>
                        {months.map(month => {
                            return <option key={month.id} value={`${month.id}`}>{month.month}</option>
                        })
                        }
                    </select>
                </div>
                <div>
                    <button onClick={() => {changeIsFavourites('isFavourite', !isFavourites)}}
                            className={isFavourites ? 'favorites favoritesSuccess' : 'favorites'}>
                        <img src={`${notFavorites}`} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}