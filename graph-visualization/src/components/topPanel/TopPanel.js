import './TopPanel.css';

import React from "react";
import {Button, DropdownButton, Dropdown, FormControl, InputGroup} from "react-bootstrap";
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
    name: 'top-panel',
});

export const TopPanel = (props) => {
    return (
        <>
            <div {...classes()}>
                <div {...classes('graph-generator')}>
                    <InputGroup className="mb-3">
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder={'Vertex count'}/>
                        <Button variant="primary" id="button-addon1">
                            Generate graph
                        </Button>
                    </InputGroup>
                </div>

                <div>
                </div>

                <div>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <hr {...classes('delimiter')}/>
        </>
    )
}