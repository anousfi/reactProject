import {Component} from 'react'
import Nbar from './TheMain';
import Main from './MainF';
class NavigationBar extends Component {
    constructor(props){
        super(props)
        this.state={
            myText:""
        };
    };
    render(){
        return (
            <div id="onTop">
                <div class="part1">
                   <p class="highBar">Anime-site</p>
                   <p class="highBar">home</p>
                </div>
                <div class="part2">
                    <input type="search" size={45} onChange={(e)=>this.setState({myText:e.target.value})}/>
                           {console.log(this.state.myText)}                
                    <button type="button" class="btn btn-warning"
                            onClick={()=>Main.findE(this.state.myText)}>
                            Search
                    </button>
                </div>
            </div>

        )
    }
}
export default NavigationBar;