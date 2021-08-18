import './BottomPanel.css';

import React from "react";
import BEMHelper from 'react-bem-helper';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {addEdge} from "../../helpers/graphFunctionality/graphFunctionality";
import {DFS} from "../../helpers/algorithms/DFS";

const classes = new BEMHelper({
    name: 'bottom-panel',
});

export const BottomPanel = (props) => {
    return (
        <div {...classes()}>
            <div {...classes('graph_builder')}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Tail of edge</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                 placeholder={'Starting vertex'}
                                 name={'from'} onChange={props.self.handleInputChange}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Head of edge</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                 placeholder={'Ending vertex'}
                                 name={'to'} onChange={props.self.handleInputChange}/>
                </InputGroup>
                <Button variant="primary" onClick={() => addEdge(props.self)}>
                    Add edge
                </Button>
            </div>
            <div {...classes('graph_builder')}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Starting vertex</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder={'Vertex'}
                                 name={'startingVertex'} onChange={props.self.handleInputChange}/>
                </InputGroup>
                <Button variant="primary" onClick={() => DFS(props.self.state.edges, props.self)}>
                    Start algorithm
                </Button>
            </div>
        </div>
    )
}