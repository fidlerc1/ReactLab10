import React, {Component} from "react";
import "./Selector.css";
import MyList from './MyList';
import Container from "./Container.js";

class Selector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectorListSelect: [30,60,90]
        };

        
    };

    update1 = () => {
        this.setState({selectorListSelect: [30,60,90]});
        console.log(this.state.selectorListSelect);
    }

    update2 = () => {
        this.setState({selectorListSelect: [50,100,150]});
        console.log(this.state.selectorListSelect);
    }

    render() {
        return(
            <div>
                <MyList value1={this.state.selectorListSelect} />
                <button type="button" onClick={this.update1}>List of 30's</button>
                <button type="button" onClick={this.update2}>List of 50's</button>
            </div>
        )
    }
};



export default Selector;