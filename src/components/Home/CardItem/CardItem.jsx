import notFavorites from '../../../images/notfavorites.svg'
import favorites from '../../../images/favorites.svg'
import './cardItem.scss'

export const CardItem = ({item, setIsFavourite}) => {
    return <div className="card">

        <img className="cardImage" src={`${item.image}`} alt=""/>
        <div className="dataCard">
           {item.date.split('.')[1]}
        </div>
        <div className="isFavorites">
            <img onClick={() => setIsFavourite(item.id, !item.isFavourite)}
                 src={item.isFavourite ? favorites : notFavorites} alt=""/>
        </div>
        <h2 className="textCard">{item.name}</h2>
    </div>
}