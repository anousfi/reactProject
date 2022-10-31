
import {useLocation, Link} from 'react-router-dom'
import {useState} from 'react'
import WatchNow from './Watch';
function Wn(){
    const [display,setD]=useState(false)
    const local=useLocation()
    const state=local.state
    return (
    <div>
            <div className='presentation1'>
                 <img className="affiche" src={state.image}/>
                 <div >
                    <div className='title highBar2'>
                    <h1>{state.name} <i class="gg-pentagon-up"></i>{state.note} </h1>
                    </div>
                    <p>{state.summary}</p>
                    <div className='ds'>
                         <div>
                            <h3>Actors</h3>
                            <p className="act">{state.actors}</p>
                            <button type="button" class="btn btn-warning" onClick={()=>setD(!display)}>Watch now!!</button>
                         </div>
                         <div className={display?'screen':'screen2'}>
                            {<WatchNow movie={state}/>}
                         </div>
                    </div>                    
                 </div>
            </div>
    </div>
    )
}
export default Wn;