import PropTypes from "prop-types"
import {
    BrowserRouter,
    useNavigate,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Wn from './Details';


function Cart(props) {
    return (
        <div className="presentation">
              <img src={props.stuff.image} height="200" className="imag"/>
              <p id="title">{props.stuff.name}</p>
              <p id="text1">{props.stuff.description}</p>
              <Link to="/Wn" state={props.stuff} id="play">
              <i className="gg-play-button text2"></i>
              <p className="text2">Watch now!!</p>
              </Link>
            </div>
    )
}
Cart.defaultProps={
    stuff:{
        image:null,
        name:"no valid title",
        description:"no informations"
    }
}
Cart.propTypes={
    stuff:PropTypes.object 
}
export default Cart ;