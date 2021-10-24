import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ConcertActions from '../redux/reducers/concert-reducer'


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ConcertActions, dispatch)
}