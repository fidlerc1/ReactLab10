import React, {Component} from "react";
import "./MyList.css"

class MyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list30: [30,60,90],
            list50: [50,100,150],
            list: this.props.value1
        };
        
    }

    

    render() {
        {this.state.list = this.props.value1};
        return(
            
            <div>
                
                <p id='list' ref="list">Your list is {this.state.list[0]}, {this.state.list[1]}, {this.state.list[2]}.</p>
                
                
            </div>
        )
    }
}

export default MyList;