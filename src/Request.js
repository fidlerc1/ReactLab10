import React, {Component} from "react";
import "./Request.css";

class Request extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: 0,
            totalServerPackages: 0
        };
    }

    async componentDidMount() {
        const response1 = await fetch('https://api.npms.io/v2/search?q=react');
        const response2 = await fetch('https://api.npms.io/v2/search?q=server');
        const data1 = await response1.json();
        const data2 = await response2.json();
        this.setState({ totalReactPackages: data1.total });
        this.setState({ totalServerPackages: data2.total });
    }

    render() {
        return (
            <div class="Requests">
                <p>Packages in npm</p>
                <p>Total React Packages: {this.state.totalReactPackages}</p>
                <p>Total Server Packages: {this.state.totalServerPackages}</p>
            </div>
        )
    }
}

export default Request;