import React from "react";
import BEMHelper from "react-bem-helper";

import './pseudocodes.css'

const classes = new BEMHelper({
    name: 'pseudocode',
});

export const DFSMainProcedure = (props) => {
    return (
        <div {...classes()}>
            <h3>Main procedure:</h3>

            <div {...classes('keyword')}>function
                DFS( <span {...classes('parameter')}>{props.self.state.startingVertex}</span> )
            </div>
            <div {...classes('indent-1')}
                 style={{backgroundColor: (props.self.state.mainProcedureStep === 1) ? "yellow" : "white"}}>visited &#8592; &#8709;</div>
            <div {...classes('indent-1')}
                 style={{backgroundColor: (props.self.state.mainProcedureStep === 2) ? "yellow" : "white"}}>DFSRecursion(
                <span {...classes('parameter')}> {props.self.state.startingVertex}, visited </span>)
            </div>
        </div>
    )
}
