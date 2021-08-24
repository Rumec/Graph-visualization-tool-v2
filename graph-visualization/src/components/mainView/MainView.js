import './MainView.css'

import React from "react";
import {TopPanel} from "../topPanel/TopPanel";
import {GraphSection} from "../graphSection/GraphSection";
import BEMHelper from 'react-bem-helper';
import {BottomPanel} from "../bottomPanel/BottomPanel";

const classes = new BEMHelper({
    name: 'main-view',
});

class MainView extends React.Component {
    RADIUS = 200;

    constructor(props) {
        super(props);
        this.state = {
            vertexCountInput: '0',
            vertexCount: 0,
            nodes: [],
            edges: [],
            from: 0,
            to: 0,
            startingVertex: 0,
            algorithm: '',
            algorithmType: '',
            mainProcedureStep: 0,
            subProcedureStep: 0,
            stepDuration: 800
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        //console.log(this.state.startingVertex);
        const {name, value} = event.target;
        this.setState({
            [name]: parseInt(value) > 0 ? parseInt(value) : 0
        })
    }

    render() {
        return (
            <div {...classes()}>
                <TopPanel self={this}/>
                <GraphSection nodes={this.state.nodes} edges={this.state.edges} self={this}/>
                <BottomPanel self={this}/>
            </div>
        )
    }

}

export default MainView;