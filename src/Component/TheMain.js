import React from "react";
import { Component } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add,search } from "../Redone/Myreducers/reducers";

import Cart from './Carte';
class Nbar extends Component {


    render(){
        return (
            <div className='themain'>
               {this.state.movie1.map(element=>(
                     <Cart stuff={element}/>
                ))}
            </div>
        )
    }
}
export default Nbar