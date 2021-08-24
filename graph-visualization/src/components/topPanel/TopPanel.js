import './TopPanel.css';

import React from "react";
import {Button, DropdownButton, Dropdown, FormControl, InputGroup} from "react-bootstrap";
import BEMHelper from 'react-bem-helper';
import {generateGraph} from "../../helpers/graphFunctionality/graphFunctionality";

const classes = new BEMHelper({
    name: 'top-panel',
});

export const TopPanel = (props) => {
    return (
        <div>
            <div {...classes()}>
                <div {...classes('graph-generator')}>
                    <InputGroup className="mb-3">
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                     placeholder={'Vertex count'} name={'vertexCountInput'}
                                     type={'number'} onChange={props.self.handleInputChange}
                                     value={props.self.state.vertexCountInput} />
                        <Button variant="primary" id="button-addon1" onClick={async () => {
                            await generateGraph(props.self);
                        }}>
                            Generate graph
                        </Button>
                    </InputGroup>
                </div>
                <div>
                    <DropdownButton id="dropdown-basic-button" title="Choose an algorithm">
                        <Dropdown.Header>Graph traversal</Dropdown.Header>
                        <Dropdown.Item
                            onClick={() => props.self.setState({algorithm: 'DFS', algorithmType: 'traversal'})}>DFS</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.self.setState({algorithm: '', algorithmType: ''})}>-</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.self.setState({algorithm: ''})}>-</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Header>Shortest path</Dropdown.Header>
                        <Dropdown.Item onClick={() => props.self.setState({algorithm: ''})}>-</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.self.setState({algorithm: ''})}>-</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.self.setState({algorithm: ''})}>-</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <hr {...classes('delimiter')}/>
        </div>
    )
}