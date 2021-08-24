import './GraphSection.css';

import React from "react";
import BEMHelper from 'react-bem-helper';
import Graph from "react-graph-vis";
import SparseGraphSubprocedure from "../../componentsOld/SparseGraphSubprocedure";
import {DFSMainProcedure} from "./pseudocodes/DFSMainProcedure";

const classes = new BEMHelper({
    name: 'graph-section',
});

export const GraphSection = (props) => {
    const graph = {nodes: props.nodes, edges: props.edges}

    // TODO: Some options will be dynamic (like curved edges)
    const options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: "#000000",
            smooth: {type: "curvedCCW"}
        },
        physics: {
            enabled: false
        },
    };

    // TODO: Create pseudocode components (probably using 1 with switch statement and using props to show correct code)
    return (
        <div {...classes()}>
            <div {...classes('graph')}>
                <Graph graph={graph} options={options}/>
            </div>
            <DFSMainProcedure self={props.self}/>
            <SparseGraphSubprocedure procedure={3} step={0}/>
        </div>
    )
}