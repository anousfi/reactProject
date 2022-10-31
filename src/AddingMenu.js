import { useState } from "react"
import Movie from "./Redone/Myreducers/TheMovie"
import {add,search} from './Redone/Myreducers/reducers';
import {useDispatch,useSelector} from 'react-redux'

function TheMenu(props){
    const [msearch,setMsearch]=useState(new Movie(undefined,"",""))
    function addI(element){
        setMsearch({...msearch,image:element})
    }
    function addN(element){
        setMsearch({...msearch,name:element})
    }
    function addD(element){
        setMsearch({...msearch,description:element})
    }
    const dispatch=useDispatch()
    const ListOfMovies=useSelector((state)=>state.MyKit.mySet)
    return (
        <div id="child">
            <div>
            <input type="text" size={45} onChange={(e)=>addI(e.target.value)}/>
            <button type="button" class="btn btn-secondary btn-sm">
            Image URl
            </button>
            </div>
            <div>
            <input type="text" size={45} onChange={(e)=>addN(e.target.value)}/>
            <button type="button" class="btn btn-secondary btn-sm">
            Name
            </button> 
            </div>       
            <div>
            <input type="text" size={45} onChange={(e)=>addD(e.target.value)}/>
            <button type="button" class="btn btn-secondary btn-sm" >
            Description
            </button>
            </div>
            <button type="button" class="btn btn-primary btn-lg" onClick={()=>{dispatch(add(msearch))}}>Submit!</button>
        </div>
    )
}
export default TheMenu;