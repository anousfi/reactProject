import {Component} from 'react'
class Text extends Component {
    constructor(){
        super()
        this.state={mytext:""}
    };
    addText(a){
     this.setState({mytext:a})
    }
}
export default Text;