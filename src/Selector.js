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
        this.setState({selectorListSelect: [30,60,90]});
        console.log(this.state.selectorListSelect);
    }

    render() {
        return(
            <div>
                <MyList value1={this.state.selectorListSelect} />
                <button type="button" onClick={this.update1}>List 30</button>
                <button type="button" onClick={this.update2}>List 50</button>
            </div>
        )
    }
};



export default Selector;