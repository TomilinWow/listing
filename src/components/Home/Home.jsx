import './home.scss'
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {CardItem} from "./CardItem/CardItem";
import {Filters} from "./Filters/Filters";


const Home = () => {
    const {filterConcerts, concerts} = useSelector(state => state.concert)
    const {getConcerts, isFavouriteAC} = useActions()

    useEffect(() => {
        getConcerts()
    }, [])

    useEffect(() => {
        if (concerts !== []) {
            localStorage.setItem('concerts', JSON.stringify(concerts))
        }
    }, [concerts])

    const setIsFavourite = (idCard, isFavourite) => {
        isFavouriteAC(idCard, isFavourite)
    }

    return <div>
        <h2 className="contentText">Event Listing</h2>
        <Filters/>
        {filterConcerts.length !== 0
            ? <div className="grid">
                {filterConcerts.map(item => {
                    return <CardItem key={item.id} item={item} setIsFavourite={setIsFavourite}/>
                })}
            </div>
            : <div className="notFound">Not found :(</div>
        }
    </div>
}

export default Home