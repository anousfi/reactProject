import Main from './Component/MainF';
import './App.css';
import Nbar from './Component/TheMain';
import {useState} from 'react';
import NavigationBar from './Component/NbarClass';
import NBF from './Component/NbarFunction';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import WatchNow from './Component/Watch';
import Wn from './Component/Details';
import About from './Component/about';
import Ct from './Component/contact';
import React from "react";
import {add,search} from './Redone/Myreducers/reducers';
import {useDispatch,useSelector} from 'react-redux';
import TheMenu from './AddingMenu';



function App(props) {
  const [slide,setSlide]=useState(false)
  const [MyText,setMyText]=useState("")
  const dis=useDispatch()
  const sts=useSelector((state)=>state.MyKit.mySet)
return (
    <div className="App">
    <BrowserRouter>
    <div id="onTop">
                <div class="part1">
                   <p class="highBar">Anime-site</p>
                   <Link to="/"><p class="highBar">home</p></Link>
                   <Link to="/about"><p class="highBar">about</p></Link>
                   <Link to="/Ct"><p class="highBar">contact</p></Link>
                   <button class="highBar2" onClick={()=>setSlide(!slide)}>Add?</button>
                   <div className={slide?"child":"child2"}>  
                     <TheMenu/>       
                   </div>      
                </div>
                <div class="part2">
                    <input type="search" size={45} onChange={(e)=>setMyText(e.target.value)}/>
                           {console.log(MyText)}                
                    <button type="button" class="btn btn-warning"
                            onClick={()=>dis(search(MyText))} >
                            Search
                    </button>
                </div>
            </div>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/Wn" element={<Wn/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="Ct" element={<Ct/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
    
  );
}
export default App;
