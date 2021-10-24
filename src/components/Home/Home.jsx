import './home.scss'
import favorites from '../../images/favorites.svg'
import notFavorites from '../../images/notfavorites.svg'
import image from '../../images/image.png'

const Home = () => {
    return <div>
        <h2 className="contentText">Event Listing</h2>
        <div className="filters">
            <div>
                <span className="selectorText">City:</span>
                <select className="select selectorText" defaultValue="...">
                    <option default disabled>...</option>
                    <option value="Чебурашка">Чебурашка</option>
                    <option selected value="Крокодил Гена">Amsterdam</option>
                    <option value="Шапокляк">Шапокляк</option>
                    <option value="Крыса Лариса">Крыса Лариса</option>
                </select>
            </div>
            <div>
                <div>
                    <span className="selectorText">Month:</span>
                    <select className="select selectorText" defaultValue="...">
                        <option default disabled>Выберите героя</option>
                        <option value="Чебурашка">Чебурашка</option>
                        <option selected value="Крокодил Гена">Крокодил Гена</option>
                        <option value="Шапокляк">Шапокляк</option>
                        <option value="Крыса Лариса">Крыса Лариса</option>
                    </select>
                </div>
                <div>
                   <button className="favorites favoritesSuccess">
                    <img src={`${notFavorites}`} alt=""/>
                </button>
                </div>

            </div>

        </div>

        <div className="grid">
            <div className="card">
                <img className="cardImage" src={`${image}`} alt=""/>
                <div className="dataCard">
                    14
                </div>
                <div className="isFavorites">
                    <img src={`${notFavorites}`} alt=""/>
                </div>
                <h2 className="textCard">test</h2>
            </div>
            <div className="card">
                <img className="cardImage" src={`${image}`} alt=""/>
                <div className="dataCard">
                    14
                </div>
                <div className="isFavorites">
                    <img src={`${notFavorites}`} alt=""/>
                </div>
                <h2 className="textCard">test</h2>
            </div>
        </div>
    </div>
}

export default Home