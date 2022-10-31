import { useState } from "react"

function Ct() {
    const [enter,setEn]=useState({
        message:"",
        email:"",
    })
    return (
        <div className="text3">
            <h4>Enter your message:</h4>
            <input type="textArea" size="45" onChange={(e)=>setEn(...enter,{message:e.target.value})}/>
            <h5>e-mail:</h5>
            <input type="text" size="30" onChange={(e)=>setEn(...enter,{email:e.target.value})}/>
            {console.log(enter)}
            <button type="button" class="btn btn-success">Send</button>

        </div>
    )
}
export default Ct;