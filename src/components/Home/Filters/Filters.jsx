import {months} from "../../../utils/months";
import notFavorites from "../../../images/notfavorites.svg";


export const Filters = ({cities, isFavourites, setIsFavourites}) => {
    return (
        <div className="filters">
            <div>
                <span className="selectorText">City:</span>
                <select className="select selectorText" defaultValue="">
                    <option value=""></option>
                    {cities.map(city => {
                        return <option value={`${city}`}>{city}</option>
                    })
                    }
                </select>
            </div>
            <div>
                <div>
                    <span className="selectorText">Month:</span>
                    <select className="select selectorText" defaultValue="">
                        <option value=""></option>
                        {months.map(month => {
                            return <option value={`${month.id}`}>{month.month}</option>
                        })
                        }
                    </select>
                </div>
                <div>
                    <button onClick={() => setIsFavourites(!isFavourites)}
                            className={isFavourites ? 'favorites favoritesSuccess' : 'favorites'}>
                        <img src={`${notFavorites}`} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}