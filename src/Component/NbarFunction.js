import {useState} from 'react'
function NBF() {
    const [te,setTe]=useState("")
    return (
        <div id="onTop">
        <div class="part1">
           <p class="highBar">Anime-site</p>
           <p class="highBar">home</p>
        </div>
        <div class="part2">
            <input type="search" size={45} onChange={(e)=>setTe(e.target.value)}/>
            {console.log(te)}
            
            <button type="button" class="btn btn-warning"
            >Search</button>
        </div>
    </div>
    )
}
export default NBF;