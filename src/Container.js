import React, {Component} from "react";
import "./Container.css"
import MyList from "./MyList.js";
import Selector from "./Selector.js";

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myName: "Hello",
            x: 0,
            name: ""
        };
        
    }

    handleCallback = (childData) =>{
        this.setState({name: childData})
    }

    render() {
        const yes = this.state
        return(
            <div id="foobar">
                <h1>{this.state.myName}</h1>

                <input type="submit" />

                <Selector myValue={this.handleCallback.bind(MyList)}/>

                
                
            </div>
            
        )
    }
}

export default Container;