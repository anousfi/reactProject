import React from "react";
import { Component } from "react";
import { useState } from 'react';
import Cart from './Carte';
import TheMenu from "../AddingMenu";
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { add,search } from "../Redone/Myreducers/reducers";
function Main(){
    const listlist=useSelector((state)=>state.MyKit.mySet)
    return (
        <div>
            <div className='themain'>
                {listlist.map(element=><Cart stuff={element}/>)}
            </div>
        </div>
    )

}
export default Main;