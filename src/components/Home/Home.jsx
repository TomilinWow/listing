import './home.scss'
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {CardItem} from "./CardItem/CardItem";
import {Filters} from "./Filters/Filters";


const Home = () => {
    const {cities, concerts, isFavourites} = useSelector(state => state.concert)
    const {getConcerts, isFavouritesAC, isFavouriteAC} = useActions()

    useEffect(() => {
        getConcerts()
    }, [])

    const setIsFavourites = (isFavourites) => {
        isFavouritesAC(isFavourites)
    }

    const setIsFavourite = (idCard, isFavourite) => {
        isFavouriteAC(idCard, isFavourite)
    }

    return <div>
        <h2 className="contentText">Event Listing</h2>
        <Filters cities={cities}
                 isFavourites={isFavourites}
                 setIsFavourites={setIsFavourites}/>

        <div className="grid">
            {concerts.map(item => {
                return <CardItem item={item} setIsFavourite={setIsFavourite}/>
            })}
        </div>
    </div>
}

export default Home