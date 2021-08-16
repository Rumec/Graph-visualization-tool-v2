import './GraphSection.css';

import React from "react";
import BEMHelper from 'react-bem-helper';
import Graph from "react-graph-vis";
import SparseGraphSubprocedure from "../../componentsOld/SparseGraphSubprocedure";

const classes = new BEMHelper({
    name: 'graph-section',
});

export const GraphSection = (props) => {
    const graph = {nodes: [
            {id: 1, label: '1'},
            {id: 2, label: '2'},
        ], edges: []};
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

    return(
        <div {...classes()}>
            <div {...classes('graph')}>
                <Graph graph={graph} options={options} />
            </div>
            <SparseGraphSubprocedure procedure={1} step={0} />
        </div>
    )
}