import './BottomPanel.css';

import React from "react";
import BEMHelper from 'react-bem-helper';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {addEdge} from "../../helpers/graphFunctionality/graphFunctionality";
import {DFSTraversal} from "../../helpers/algorithms/DFSTraversal";

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
                                 name={'from'} value={props.self.state.from}
                                 type={'number'} onChange={props.self.handleInputChange}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Head of edge</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                 placeholder={'Ending vertex'} value={props.self.state.to}
                                 name={'to'} type={'number'} onChange={props.self.handleInputChange}/>
                </InputGroup>
                <Button variant="primary" onClick={() => addEdge(props.self)}>
                    Add edge
                </Button>
            </div>
            <div {...classes('graph_builder')}>
                <RenderAlgorithmControl self={props.self}/>
            </div>
        </div>
    )
}

const RenderAlgorithmControl = (props) => {
    const vertexValidation = (vertex, vertexCount) => vertex <= vertexCount && vertex > 0;

    const algorithmRun = (self) => {

        if (self.state.algorithmType === 'traversal' &&
            vertexValidation(self.state.startingVertex, self.state.vertexCount)) {
            switch (self.state.algorithm) {
                case 'DFS':
                    DFSTraversal(props.self.state.edges, props.self);
                    break;
                default:
                    return;
            }
        }
    }

    switch (props.self.state.algorithmType) {
        case 'traversal':
            return (
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Starting vertex</InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder={'Vertex'}
                                     name={'startingVertex'} onChange={props.self.handleInputChange} type={'number'}/>
                    </InputGroup>
                    <Button variant="primary" onClick={() => DFSTraversal(props.self.state.edges, props.self)}>
                        Start algorithm
                    </Button>
                </div>
            )
        case 'pathfinding':
            return (
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Starting vertex</InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder={'Vertex'}
                                     name={'startingVertex'} type={'number'} onChange={props.self.handleInputChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Starting vertex</InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder={'Vertex'}
                                     name={'endingVertex'} type={'number'} onChange={props.self.handleInputChange}/>
                    </InputGroup>
                    <Button variant="primary" onClick={() => algorithmRun(props.self)}>
                        Start algorithm
                    </Button>
                </div>
            )
        default:
            return (<div></div>)
    }
}